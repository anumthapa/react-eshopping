import React, { Component }from "react";

export default class Login extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
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
                      <input type="email" name="email" class="form-control" id="email" aria-describedby="enailHelp" placeholder="Enter email"></input>
                    
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