import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

/* Class Based Component  */
//
//
 class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: true,
    cartSubTotal: 0,
    cartTotal: 0
  };
  //
  //
  componentDidMount() {
    this.setProducts();
  }
  //
  //
  /* Logic for "singleItem" */
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return products;
    }),
      this.checkCartItems;
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetails = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return detailProduct;
    });
  };
  /*Open Modal */
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  /* Close Modal*/
  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer  = ProductContext.Consumer;

export {ProductProvider , ProductConsumer};