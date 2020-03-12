import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

export default class Navbar extends Component {
    render(){
        return(
            <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button"
       class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"
       aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">E-Shopping</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav mr-auto">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user "></span> Your Account</a></li>
        <li role ="presentation"><a href="#"><span class="glyphicon glyphicon-shopping-cart badge"></span> Cart</a></li>
      </ul>
    </div>
  </div>
</nav>
        );
    }
}