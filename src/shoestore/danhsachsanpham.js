import React, { Component } from "react";
import SanPham from "./sanpham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { productsData, setStateModal } = this.props;
    return productsData.map((item, index) => {
      return (
        <SanPham key={index} product={item} setStateModal={setStateModal} />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
