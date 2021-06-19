import React from "react";
import "./App.css";
import EditorBlock from "./components/EditorBlock/EditorBlock";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Intro />
        <EditorBlock />
    </div>
  );
}

export default App;
