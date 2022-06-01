import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Product</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-5">
                  <img className="img-fluid" src={content.image} alt="" />
                </div>
                <div className="col-sm-7">
                  <h3>Detail</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{content.name}</td>
                      </tr>
                      <tr>
                        <td>Alias</td>
                        <td>{content.alias}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>{content.price} $</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{content.description}</td>
                      </tr>
                      <tr>
                        <td>Short Description</td>
                        <td>{content.shortDescription}</td>
                      </tr>
                      <tr>
                        <td>Quantity</td>
                        <td>{content.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
