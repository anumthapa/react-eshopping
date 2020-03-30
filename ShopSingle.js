import React , {Component} from "react";
import Img from "cloth1.jpg"
export default class ShopSingle extends Component {
  render(){
    const {id, title , img , price}= this.props.product;
    return(
   
      <div>
      <img src={Img}/>
      </div>
   
    );
  };
}