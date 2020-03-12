import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Navbar from "./Navbar";
import './style.css';
import Login from "./login";

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
      <Login />
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
