import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { dat: new Date() };
    this.loop = null;
  }
  componentDidMount() {
    this.loop = setInterval(() => {
      this.setState({ dat: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.loop);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">
          {this.state.dat.getHours() % 12 < 10
            ? `0${this.state.dat.getHours() % 12}`
            : `${this.state.dat.getHours()}`}
          :
          {this.state.dat.getMinutes() < 10
            ? `0${this.state.dat.getMinutes()}`
            : `${this.state.dat.getMinutes()}`}
          :
          {this.state.dat.getSeconds() < 10
            ? `0${this.state.dat.getSeconds() % 12}`
            : `${this.state.dat.getSeconds()}`}{" "}
          {this.state.dat.getHours < 12  ? "AM" : "PM"}
        </h3>
      </div>
    );
  }
}

export default App;
