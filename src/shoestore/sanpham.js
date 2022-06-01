import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { product, setStateModal } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card mb-4">
          <img
            className="btn card-img-top"
            data-toggle="modal"
            data-target="#modelId"
            src={product.image}
            onClick={() => {
              setStateModal(product);
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price} $</p>
            <button className="btn btn-dark">
              Add to cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
