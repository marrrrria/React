import React, { Component } from "react";
import CreateTest from "./CreateTest";

export default class Conditional extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      isLogIn: false,
    }
  }

  changeLogIn = () => {
    console.log(this.state)
    this.setState((state => {
      return {
        isLogIn: !state.isLogIn,
      }
    }))
  }

  render() {
    return (
      <div>
        {/* {this.state.isLoading || <button onClick={() => this.changeLogIn()}>{this.state.isLogIn ? "LOG OUT" : "LOG IN"}</button>} */}
        <button onClick={() => this.changeLogIn()}>{this.state.isLogIn ? "LOG OUT" : "LOG IN"}</button>
        {this.state.isLogIn && <CreateTest/>}
        
        {/* {this.state.isLogIn ? <button onClick={() => this.changeLogIn()}>LOG OUT</button> : <button onClick={() => this.changeLogIn()}>LOG IN</button>} */}
      </div>
    )
  }
}