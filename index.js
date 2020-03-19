import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Navbar from "./Navbar";
import './style.css';
import Login from "./login";
import Buttonfilemodel from "./buttonfilemodel";
import Items from "./items";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div >
      <Navbar/>
      <Hello />
       <Items />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
