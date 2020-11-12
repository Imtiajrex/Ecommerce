import React from "react";
import { NavLink } from "react-router-dom";

function Index() {
    return (
        <div className="top-bar-2 pc">
            <div className="brand">
                <img src={`${assetPath}storage/images/logo.png`} alt="Brand" />
            </div>
            <div className="search-div">
                <div className="search-box">
                    <div className="search-icon">
                        <i className="fas fa-search"></i>
                    </div>

                    <div className="search-text-box">
                        <input
                            type="text"
                            autoComplete="false"
                            placeholder="Search Here..."
                        />
                    </div>
                    <button className="search-btn">
                        <a className="btn">Search</a>
                    </button>
                </div>
            </div>
            <div className="contact-bag">
                <div className="contact">
                    <a className="contact-btn">Contact Us</a>
                </div>
                <div className="bag">
                    <a
                        className="bag-btn"
                        href="#"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fas fa-shopping-bag"></i>
                    </a>
                    <div
                        className="dropdown-menu  dropdown-menu-right mt-3 bag-list"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <div className="row">
                            <div className="title col-12">
                                <h1>Shopping Bag</h1>
                                <h1
                                    style={{ fontSize: "13px" }}
                                    className="text-muted"
                                >
                                    Total Amount: 1500৳
                                </h1>
                            </div>
                            <div className="col-12">
                                <div className="row item">
                                    <div className="product-image col-sm-3">
                                        <img
                                            src={`${assetPath}storage/images/3.jpg`}
                                        />
                                    </div>
                                    <div className="product-details col-sm-8">
                                        <div className="row mb-2">
                                            <div className="col">
                                                <div className="name">
                                                    Sic Mundus Creatus Est
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="quantity">
                                                    <a>Quantity:</a>
                                                    <a className="text-muted">
                                                        {" "}
                                                        5
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="price">
                                                    <a>Price:</a>
                                                    <a className="text-muted">
                                                        {" "}
                                                        100৳
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons col-sm-1 d-flex align-items-center p-1">
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="row item">
                                    <div className="product-image col-sm-3">
                                        <img
                                            src={`${assetPath}storage/images/3.jpg`}
                                        />
                                    </div>
                                    <div className="product-details col-sm-8">
                                        <div className="row mb-2">
                                            <div className="col">
                                                <div className="name">
                                                    Sic Mundus Creatus Est
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="quantity">
                                                    <a>Quantity:</a>
                                                    <a className="text-muted">
                                                        {" "}
                                                        5
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="price">
                                                    <a>Price:</a>
                                                    <a className="text-muted">
                                                        {" "}
                                                        100৳
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons col-sm-1 d-flex align-items-center p-1">
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="row item">
                                    <div className="product-image col-sm-3">
                                        <img
                                            src={`${assetPath}storage/images/3.jpg`}
                                        />
                                    </div>
                                    <div className="product-details col-sm-8">
                                        <div className="row mb-2">
                                            <div className="col">
                                                <div className="name">
                                                    Sic Mundus Creatus Est
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="quantity">
                                                    <a>Quantity:</a>
                                                    <a className="text-muted">
                                                        {" "}
                                                        5
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="price">
                                                    <a>Price:</a>
                                                    <a className="text-muted">
                                                        {" "}
                                                        100৳
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons col-sm-1 d-flex align-items-center p-1">
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="row pl-3 buy">
                                    <div className="col">
                                        <NavLink
                                            to="/Checkout"
                                            className="btn btn-success"
                                        >
                                            Checkout
                                        </NavLink>
                                    </div>
                                    <div className="col">
                                        <NavLink
                                            to="/bag"
                                            className="btn btn-warning text-white"
                                        >
                                            View Bag
                                        </NavLink>
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

export default Index;
