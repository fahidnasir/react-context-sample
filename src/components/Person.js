import React, { Component } from "react";
import MyContext from "./MyContext";

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <p>Active: {context.state.active.toString()}</p>
              <button onClick={context.increaseAge}>
                Happy Birthday!!! 🍰🍥🎂
              </button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Person;
