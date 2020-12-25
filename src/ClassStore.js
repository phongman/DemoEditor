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
  
  import {EpsilonTransition, RuleTransition, AtomTransition, SetTransition, ActionTransition, PrecedencePredicateTransition} from 'antlr4/src/antlr4/atn/Transition'
  
  
  import {CommonToken} from 'antlr4/src/antlr4/Token'

export class ParserStack {
    constructor(states) {
      this.states = states ? states : []
    }

    removeLastState = () => {
      const cloneState = [...this.states]
      cloneState.pop()
      console.log('stateeeeeeeeeeeeeeeee', this.states)
      return cloneState;
    };
  
    addState = (state) => {
      return [...this.states, state];
    };
  
    process = (state) => {
      if (
        state instanceof RuleStartState || //
        state instanceof StarBlockStartState || //
        state instanceof BasicBlockStartState || //
        state instanceof PlusBlockStartState || //
        state instanceof StarLoopEntryState
      ) {
        return {
          status: true,
          states: new ParserStack(this.addState(state)),
        };
      }
      let size = this.states.length;
      let last = this.states[size - 1];
  
      if (state instanceof BlockEndState) {
        if (last === state.startState)
          return {
            status: true,
            states: new ParserStack(this.removeLastState()),
          };
        return {
          status: false,
          states: this,
        };
      } else if (state instanceof LoopEndState) {
        const _state = state;
        const cont =
          last instanceof StarLoopEntryState &&
          last.loopBackState === _state.loopBackState;
        if (!cont)
          return {
            status: false,
            states: this,
          };
        return {
          status: true,
          states: new ParserStack(this.removeLastState()),
        };
      } else if (state instanceof RuleStopState) {
        const cont = last instanceof RuleStartState && last.stopState === state;
        if (cont)
          return {
            status: true,
            states: new ParserStack(this.removeLastState()),
          };
        return {
          status: false,
          states: this,
        };
      } else if (
        state instanceof BasicState || //
        state instanceof BlockEndState || //
        state instanceof StarLoopbackState || //
        state instanceof PlusLoopbackState
      )
        return {
          status: true,
          states: this,
        };
    };
  }

 export class TokenStream {
    constructor(tokens, cursors) {
      this.tokens = tokens
      this.cursors = cursors ? cursors : 0
      this.UNKNOWN = new CommonToken(undefined, -1);
    }

    next() {
      console.log('cursorrrrrrrrs', this.cursors)

      if(this.cursors >= this.tokens.length){
        return this.UNKNOWN
      }
      return this.tokens[this.cursors]
    }

    atCaret() {
      const test = this.next();
      console.log('testtt', test)

      return test.type < 0;
    }
    move() {
      return new TokenStream(this.tokens, this.cursors + 1)
    }
  }

 export class Collector {
    constructor() {
      this.collected = new Set()
    }

    collect(type) {
      this.collected.add(type)
    }

    getCollected() {
      return this.collected
    }
  }