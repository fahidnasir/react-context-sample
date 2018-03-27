import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
  state = {
    name: "Fahid",
    age: 26,
    active: true
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          increaseAge: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
