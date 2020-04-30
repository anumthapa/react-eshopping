import React , {Component} from "react";
import Ig from "https://www.northerntool.com/images/product/2000x2000/508/5087r_2000x2000.jpg";
export default class ShopSingle extends Component {
  render(){
    const mystyle= {
      width: "550px",
      height:"550px"
    };
    const {id, title , img , price}= this.props.product;
    return(
   
      <div>
      <img src={Ig} style={mystyle}/>
      </div>
   
    );
  };
}