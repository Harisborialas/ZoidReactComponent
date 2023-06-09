import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App(props) {
  let [myWord, changeMyWord] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello I'm a beautiful widget! My name is <code>{props.name || "undefined"}</code>
        </p>
        <input placeholder="placeholder" />
        <button onClick={() => props.passDownFunc(myWord)}>
          Pass this word up to parent
        </button>
      </header>
    </div>
  );
}

export default App;
