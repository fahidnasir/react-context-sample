import React, { Component } from "react";
import Person from "./Person";

class Family extends Component {
  render() {
    return (
      <div className="family">
        <Person />
      </div>
    );
  }
}

export default Family;
