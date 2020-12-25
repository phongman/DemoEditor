import React, { useState } from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";

import examples from "./examples";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("javascript");
  const [isEditorReady, setIsEditorReady] = useState(false);

  function handleEditorDidMount() {
    setIsEditorReady(true);
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function toggleLanguage() {
    setLanguage(language === "javascript" ? "python" : "javascript");
  }

  return (
    <>
      <button onClick={toggleTheme} disabled={!isEditorReady}>
        Toggle theme
      </button>
      <button onClick={toggleLanguage} disabled={!isEditorReady}>
        Toggle language
      </button>

      <Editor
        height="90vh" // By default, it fully fits with its parent
        theme={theme}
        language={language}
        loading={<Loader />}
        value={examples[language]}
        editorDidMount={handleEditorDidMount}
        options={{ lineNumbers: "off" }}
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);