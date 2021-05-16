import React, { Component } from "react";
import './Person.css'
export class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "latifa",
      bio: "MPSE",
      profession: "etudiant",
      isShow: false,
      //imgsrc:"/malina.jpg"
    };
  }
  render() {
    return (
      <div>
        <h1 className="taftaf">My name is {this.state.fullName}</h1>
        <p className="parag">
          I am a {this.state.profession} in {this.state.bio}.<br></br>
          and this is my photo
        </p>
        <img className="imge" src="/malina.jpg" alt="malina"></img>
      </div>
    );
  }
}

export default Person;
