import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyProvider from "./components/MyProvider";
import Family from "./components/Family";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>Paragraph from Main App Component</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
