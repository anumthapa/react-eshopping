import React, { Component }from "react";
import "./login.css";
export default class Login extends Component{
  render(){
    return(
      <div className="container ">
        <div className="row" >
          <div className="col-md-5 mx-auto   ">
            <div id ="first">
              <div className="myform form">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Login</h1>
                  </div>             
                </div>
                  <form action="" method="post" name="login">
                    <div className="form-group">
                      <label for="InputEmail">Email address </label>
                      <input type="email" name="email" class="form-control" id="email" aria-describedby="enailHelp" placeholder="Enter Email"></input><br/>
                     <label for="InputPassword">Password </label>
                      <input type="email" name="email" class="form-control" id="email" aria-describedby="enailHelp" placeholder="Enter Password"></input>
                    <div className="form group">
                      <p className="text-center"> By Signing Up you acccept our <a href="#">Terms of Use </a></p>
                    </div>
                    <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-block mybtn btn-primary tx-tfm">Login</button></div>
                    <div className="col-md-12">
                      <div className="login-or">
                        <hr className="hr-or"></hr>
                        <span className="span-or">or</span>
                              </div>
                      <div className="col-md-12 mb-3">
                        <p className="text-center">
                        <a href="javascript:void();" className="google btn mybtn"><i class="fa fa-google-plus"></i>SignUp Using Google</a></p>
                      </div>
                      <div className="form-group">
                      <p className="text-center">Don't have account? <a href="#" id="signup">Sign Up here</a></p>
                      </div>
                    </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
