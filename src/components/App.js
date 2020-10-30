import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { dat: new Date() };
    this.loop = () => {
      setInterval(() => {
        this.setState({ dat: new Date() });
      }, 1000);
    };
  }
  componentDidMount() {
    this.loop();
  }
  componentWillUnmount() {
    clearInterval(this.loop());
  }
  render() {
    return (
      <div className="Clock">
        <div className="time">
        {this.state.dat.getHours() % 12<10?`0${this.state.dat.getHours()%12}`:`${this.state.dat.getHours()}`}
        :
        {this.state.dat.getMinutes()<10?`0${this.state.dat.getMinutes()}`:`${this.state.dat.getMinutes()}`}
        :
        {this.state.dat.getSeconds()<10?`0${this.state.dat.getSeconds()%12}`:`${this.state.dat.getSeconds()}`}
        {" "}
        {this.state.dat.getHours % 12 === 0 ? "AM" : "PM"}
        </div>
      </div>
    );
  }
}

export default App;
