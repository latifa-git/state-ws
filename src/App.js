import React, { Component } from "react";
import Person from "./profile/Person";

export class App extends Component {
  state = {
    fullName: "latifa",
    bio: "MPSE",
    profession: "etudiant",
    isShow: false,
  };
  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isShow ? "Hide" : "Show"}
        </button>{"click me !! "}
        <br />
        {this.state.isShow ? <Person/> : "Taper again"}
      </div>
    );
  }
}

export default App;
