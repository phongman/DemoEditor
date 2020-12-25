import "./App.css";
import { useState, useEffect, useRef } from "react";
import antlr4 from "antlr4";
import NqlLexer from "./Grammar/NqlLexer";
import NqlParser, { atn } from "./Grammar/NqlParser";
import NqlParserListener from "./Grammar/NqlParserListener";
import { ControlledEditor, monaco } from "@monaco-editor/react";
import examples from "./examples";
import autosuggest from "antlr4-autosuggest";
// import { ErrorListener } from "antlr4/error/errorlistener";
import {
  ATNState,
  BasicBlockStartState,
  BasicState,
  BlockEndState,
  LoopEndState,
  PlusBlockStartState,
  PlusLoopbackState,
  RuleStartState,
  RuleStopState,
  StarBlockStartState,
  StarLoopEntryState,
  StarLoopbackState,
} from "antlr4/src/antlr4/atn/ATNState";

import {
  EpsilonTransition,
  RuleTransition,
  AtomTransition,
  SetTransition,
  ActionTransition,
  PrecedencePredicateTransition,
} from "antlr4/src/antlr4/atn/Transition";

import { CommonToken } from "antlr4/src/antlr4/Token";

import { ParserStack, TokenStream, Collector } from "./ClassStore";

function App() {
  const [query, setQuery] = useState("");
  const [lineQuery, setLineQuery] = useState("");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("javascript");
  const [isEditorReady, setIsEditorReady] = useState(false);
  const editorRef = useRef();

  console.log("lineQuery", lineQuery);

  const CARET_TOKEN_TYPE = -10;
  const RULE_NAMES = NqlParser.ruleNames;
  const ATN_FIRST_STATE = atn.states[0];

  const fields = ["HEHe", "Library", "Doing"];

  const functions = ["getHEhe", "deleteLibrary", "Verbing"];

  useEffect(() => {
    monaco.init().then((monacoInstance) => {
      monacoInstance.languages.register({
        id: "LukLak",
      });

      monacoInstance.languages.registerCompletionItemProvider("LukLak", {
        provideCompletionItems: () => {
          return {
            suggestions: [
              {
                label: "simpleText",
                kind: monacoInstance.languages.CompletionItemKind.Text,
                insertText: "simple Text",
              },
            ],
          };
        },
      });
    });
  }, []);

  const handleOnchange = (e, value) => {
    setQuery(value);
  };

  function handleEditorDidMount(_, editor) {
    editorRef.current = editor;
    setIsEditorReady(true);
    const model = editor.getModel();
    editor.onKeyUp((ev) => {
      const position = editor.getPosition();
      const currentMouseData = model
        .getLineContent(position.lineNumber)
        .slice(0, position.column - 1);
      setLineQuery(currentMouseData);
      // editor.addCommand(10, function () {
      //   const queryPredict = predict(fields, functions, currentMouseData);
      //   console.log(queryPredict);
      // });
      if(ev.keyCode === 10) {
        const queryPredict = predict(fields, functions, currentMouseData);
        console.log(queryPredict);
      }
    });
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function toggleLanguage() {
    setLanguage(language === "javascript" ? "python" : "javascript");
  }

  const getLabel = (intervals) => {
    const result = [];
    for (let item of intervals) {
      for (let i = item.start; i < item.stop; i++) result.push(i);
    }
    return result;
  };

  const describeTransition = (t) => {
    if (t instanceof EpsilonTransition) return "(epsilon)";
    if (t instanceof RuleTransition)
      return `rule ${RULE_NAMES[t.ruleIndex]} precedence ${t.precedence}`;
    if (t instanceof AtomTransition) {
      return `atom(${NqlLexer.symbolicNames[t.label_]})`;
    }
    if (t instanceof SetTransition) {
      return getLabel(t.label.intervals)
        .map((el) => NqlLexer.symbolicNames[el])
        .join(", ");
    }
    if (t instanceof ActionTransition) return "action";
    if (t instanceof PrecedencePredicateTransition)
      return "precedence predicate " + t.precedence;

    return "UNKNOWN" + t.constructor.name;
  };

  const describeState = (s) => {
    if (s instanceof RuleStartState)
      return `rule start (stop -> ${s.stopState}) isLeftRec ${s.isLeftRecursiveRule} (ruleIndex=${s.ruleIndex})`;
    if (s instanceof RuleStopState)
      return `rule stop (ruleIndex=${s.ruleIndex})`;
    if (s instanceof BasicState) return `basic`;
    if (s instanceof PlusBlockStartState)
      return `plus block start (loopback ${s.loopBackState})`;
    if (s instanceof StarBlockStartState) return `star block start`;
    if (s instanceof StarLoopEntryState)
      return `star loop entry start (loopback ${s.loopBackState}) prec ${s.isPrecedenceDecision}`;
    if (s instanceof StarLoopbackState) return `star loopback`;
    if (s instanceof BasicBlockStartState) return `basic block start`;
    if (s instanceof BlockEndState) return `block end (start ${s.startState})`;
    if (s instanceof PlusLoopbackState) return `plus loopback`;
    if (s instanceof LoopEndState)
      return `loop end (loopback ${s.loopBackState})`;

    return "UNKNOWN " + s.getClass().getSimpleName();
  };

  const describe = (s, t) => {
    return `[${s.stateNumber}], ${describeState(s)}, ${describeTransition(t)}`;
  };

  const isCompatibleWithStack = (state, parserStack) => {
    const res = parserStack.process(state);
    if (!res.status) return false;

    if (state.epsilonOnlyTransitions) {
      for (let t of state.transitions) {
        if (isCompatibleWithStack(t.target, res.states)) return true;
      }
      return false;
    }

    return true;
  };

  const autoCompleteProcess = (
    state,
    tokens,
    collector,
    parserStack,
    alreadyPassed,
    history
  ) => {
    const atCaret = tokens.atCaret();
    const stackRes = parserStack.process(state);

    if (!stackRes.status) {
      return;
    }

    for (let transition of state.transitions) {
      history.push(describe(state, transition));

      const target = transition.target;
      if (transition.isEpsilon) {
        const stateNumber = target.stateNumber;
        if (!alreadyPassed.includes(stateNumber)) {
          const _alreadyPassed = [...alreadyPassed, stateNumber];
          autoCompleteProcess(
            target,
            tokens,
            collector,
            stackRes.states,
            _alreadyPassed,
            history
          );
        }
      } else if (transition instanceof AtomTransition) {
        const nextTokenType = tokens.next();
        const label = transition.label_;
        if (atCaret) {
          if (isCompatibleWithStack(target, parserStack))
            collector.collect(label);
        } else {
          if (nextTokenType.type === label)
            autoCompleteProcess(
              target,
              tokens.move(),
              collector,
              stackRes.states,
              [],
              history
            );
        }
      } else if (transition instanceof SetTransition) {
        const nextTokenType = tokens.next();
        for (let symbol of getLabel(transition.label.intervals)) {
          if (atCaret) {
            if (isCompatibleWithStack(target, parserStack))
              collector.collect(symbol);
          } else {
            if (nextTokenType.type === symbol)
              autoCompleteProcess(
                target,
                tokens.move(),
                collector,
                stackRes.states,
                [],
                history
              );
          }
        }
      } else {
        console.log("error", transition.constructor.name);
      }
    }
  };

  const preceedingTokens = (input) => {
    const res = [];
    const stream = new antlr4.InputStream(input);
    const lexer = new NqlLexer(stream);
    let next = null;
    do {
      next = lexer.nextToken();
      if (next.channel === 0) {
        if (next.type < 0) next = new CommonToken(undefined, CARET_TOKEN_TYPE);
        res.push(next);
      }
    } while (next.type >= 0);
    return res;
  };

  const newHistory = () => ["[START]"];

  const suggest = (input) => {
    const collector = new Collector();
    const history = newHistory();
    const tokens = preceedingTokens(input);

    autoCompleteProcess(
      ATN_FIRST_STATE,
      new TokenStream(tokens),
      collector,
      new ParserStack(),
      [],
      history
    );

    return {
      collected: collector.getCollected(),
      history: history,
      tokens: tokens,
    };
  };

  const normalize = (tokenType) => {
    const displayName = NqlLexer.symbolicNames[tokenType];
    if (displayName.startsWith("'") && displayName.endsWith("'"))
      return displayName
        .substring(1, displayName.length() - 1)
        .replaceAll("\\'", "'");
    return displayName;
  };

  const predict = (fields, functions, lineQuery) => {
    const triple = suggest(lineQuery);
    const tokenTypes = triple.collected;

    const suggestions = [];

    for (let tokenType of tokenTypes) {
      switch (tokenType) {
        // case NqlLexer.ID:
        // suggestions.push(...fields, ...functions);
        //   break;
        default:
          suggestions.push(normalize(tokenType));
          break;
      }
    }

    return suggestions;
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} disabled={!isEditorReady}>
        Toggle theme
      </button>
      <button onClick={toggleLanguage} disabled={!isEditorReady}>
        Toggle language
      </button>
      <ControlledEditor
        height="90vh" // By default, it fully fits with its parent
        theme={theme}
        language="LukLak"
        onChange={handleOnchange}
        value={query}
        editorDidMount={handleEditorDidMount}
        options={{ lineNumbers: "off" }}
      />
    </div>
  );
}

export default App;
