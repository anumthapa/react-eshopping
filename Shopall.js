import React , {Component } from "react";


export default class Shopall extends Component {
  render(){
    return(
      
       <div className="continer">
        <div className="row mb-5 py-5">
          <div className="col-md-9 order-2">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="float-md-left mb-4 ">
                  <h4 className="text-black h4">Shop All</h4>
                </div>
                <div className="d-flex">
                  <div className="dropdown mr-1 ml-md-auto">
                    <button type="buton" className="btn btn-secondary btn-sm dropdown-toggle" id="?" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Latest</button>
                    <div className="dropdown-menu"  aria-labelledby="dropdownMenuOffset">
                      <a className="dropdown-item" href="#">Men</a>
                      <a className="dropdown-item" href="#">Women</a>
                    
                    </div>
                     <div className="btn-group">
                                <button type="button" className="btn btn-secondary btn-sm dropdown-toggle ml-3" id="dropdownMenuReference" data-toggle="dropdown">
                                    Reference
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                    <a className="dropdown-item" href="#">Reference</a>
                                    <a className="dropdown-item" href="#">Name, A to Z</a>
                                    <a className="dropdown-item" href="#">Name, Z to A</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Price, low to high</a>
                                    <a className="dropdown-item" href="#">Price, high to low</a>
                                </div>
                            </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    );
  }


}