import React from "react";
class View extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="modal fade"
                    id="viewModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="viewModalLabel"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Order Details #1
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6 ">
                                        <strong>Order ID:</strong>
                                    </div>
                                    <div className="col-md-6">1</div>
                                </div>
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6">
                                        <strong>Product ID:</strong>
                                    </div>
                                    <div className="col-md-6">1</div>
                                </div>
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6">
                                        <strong>Product Title:</strong>
                                    </div>
                                    <div className="col-md-6">T shirt</div>
                                </div>
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6">
                                        <strong>Ordered Quantity:</strong>
                                    </div>
                                    <div className="col-md-6">3</div>
                                </div>
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6">
                                        <strong> Customer Name:</strong>
                                    </div>
                                    <div className="col-md-6">Roger Smith</div>
                                </div>
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6">
                                        <strong>Customer Phone Number:</strong>
                                    </div>
                                    <div className="col-md-6">0657913569</div>
                                </div>
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6">
                                        <strong>Address:</strong>
                                    </div>
                                    <div className="col-md-6">
                                        Mirpur, Dhaka
                                    </div>
                                </div>
                                <div className="row mb-3 bg-default text-secondary p-3">
                                    <div className="col-md-6">
                                        <strong>Order Status:</strong>
                                    </div>
                                    <div className="col-md-6">Delivering</div>
                                </div>
                            </div>
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default View;
