import React, { Component } from "react";
import DanhSachSanPham from "./danhsachsanpham";
import Modal from "./modal";
import data from "./data.json";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: data,
      detailProduct: data[0],
    };
  }

  setStateModal = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  render() {
    const { productList, detailProduct } = this.state;
    return (
      <div className="container">
        <h3>Shoes shop</h3>
        <DanhSachSanPham
          productsData={productList}
          setStateModal={this.setStateModal}
        />
        <Modal content={detailProduct} />
      </div>
    );
  }
}
