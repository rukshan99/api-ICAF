import React, { Component } from "react";
import Clock from "./clock";

class timer extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "December, 7, 2021" };
  }
  render() {
    return (
      <div className="App">
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default timer;