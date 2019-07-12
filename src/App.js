import React from "react";

import "./App.css";
import Youtube from "./youtube";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>welcome to AYUSH's Youtube</h2>
        </header>
        <Youtube />
      </div>
    );
  }
}

export default App;
