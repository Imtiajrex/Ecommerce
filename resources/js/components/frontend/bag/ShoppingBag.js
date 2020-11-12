import React from "react";
import { NavLink } from "react-router-dom";
function Index() {
    return (
        <>
            <div className="col">
                <div className="container-fluid row ml-auto mr-auto mt-3">
                    <div className="title col-12">
                        <h1>Your Shopping Bag</h1>
                    </div>
                    <div className="col-12 mt-3">
                        <table className="table">
                            <thead className="pc">
                                <tr>
                                    <th scope="col">Product Image</th>
                                    <td>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <b>Name</b>
                                            </div>
                                            <div className="col-md-3">
                                                <b>Item Price</b>
                                            </div>
                                            <div className="col-md-3">
                                                <b>Quantity</b>
                                            </div>
                                            <div className="col-md-3">
                                                <b>Price</b>
                                            </div>
                                        </div>
                                    </td>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="h-100 d-flex align-items-center">
                                            <img
                                                src={`${assetPath}storage/images/3.jpg`}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <a>Sic Mundus</a>
                                            </div>
                                            <div className="col-md-3">
                                                <a className="text-success">
                                                    <strong>650 ৳</strong>
                                                </a>
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Quantity"
                                                    defaultValue="1"
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <a className="text-success">
                                                    <strong>650 ৳</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="h-100 d-flex align-items-center">
                                            <a className="text-danger" href="#">
                                                <i className="fas fa-trash text-danger"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="h-100 d-flex align-items-center">
                                            <img
                                                src={`${assetPath}storage/images/5.jpg`}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <a>Creatus Est</a>
                                            </div>
                                            <div className="col-md-3">
                                                <a className="text-success">
                                                    <strong>285 ৳</strong>
                                                </a>
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Quantity"
                                                    defaultValue="3"
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <a className="text-success">
                                                    <strong>850 ৳</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="h-100 d-flex align-items-center">
                                            <a className="text-danger" href="#">
                                                <i className="fas fa-trash text-danger"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="pc">
                                    <td colSpan="3" className="text-right">
                                        <a className="btn btn-info total text-white">
                                            Total: 1500 ৳
                                        </a>
                                    </td>
                                </tr>
                                <tr className="pc">
                                    <td colSpan="3" className="text-right">
                                        <NavLink
                                            to="/Checkout"
                                            className="btn btn-success checkout text-white"
                                        >
                                            Checkout
                                        </NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
