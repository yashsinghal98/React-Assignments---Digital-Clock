import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
      super();
      this.state = { dat: new Date() };
      this.loop=null;
    };
    componentDidMount() {
      let val=new Date();
      this.loop=setInterval(()=>this.setState({dat:val}),1000);
    }
    componentWillUnmount() {
      clearInterval(this.loop);
    }
    render() {
      return <div className="Clock"><div className="time">{this.state.dat.getHours()%12}:{this.state.dat.getMinutes()}:{this.state.dat.getSeconds()} {this.state.dat.getHours%12===0?"AM":"PM"}</div></div>;
    }
  }
  
  export default App;
  