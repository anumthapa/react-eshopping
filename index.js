import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Switch} from "react-router-dom";
import Hello from './Hello';
import Navbar from "./Navbar";
import Shop from "./shop";
import Shopall from "./Shopall";
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
      <React.Fragment>
      <Navbar/>
      <Shop/>
      <Shopall/>
    </React.Fragment>

      //  <

      //  <Router path ="#" component ={ProductList}/>
      //  <Router path ="/details" component ={Details}/>
      //  <Router path ="/cart" component ={Cart}/>
       
      //  </Switch>

     
   
    );
  }
}

render(<App />, document.getElementById('root'));
