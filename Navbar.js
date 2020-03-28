import React, { Component } from "react";
import login from "./login";
import buttonfilemodal from "./buttonfilemodal";
import "./Navbar.css";
export default class Navbar extends Component {
    render(){
         return(
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
   <div className="site-navbar" role="banner">
   <div className="site-navbar-top">
    <div className="col-12 col-md-2 py-2">
       <div className="site-logo">
          <a href="#" className="logo-shop"> Shoppers <i class="fa fa-font-awesome"></i>	   </a>
        </div>
      </div>
   </div>   
  </div>
 <button id="navbarbtn" class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       </nav>
        );
    };
}