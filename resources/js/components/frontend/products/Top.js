import React from "react";
import { NavLink } from "react-router-dom";
function Index() {
    return (
        <>
            <div className="top row">
                <div className="col text-center">
                    <img src={`${assetPath}storage/images/logo.png`} />
                </div>
            </div>
            <div className="top-bar row">
                <div className="col-10 col-sm-11">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Electroics</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Mobile</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Product
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-2 col-sm-1 text-right">
                    <div className="bag pc">
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
                                    <div className="row pl-3 buy ">
                                        <div className="col text-left">
                                            <NavLink
                                                to="../Checkout"
                                                className="btn btn-success"
                                            >
                                                Checkout
                                            </NavLink>
                                        </div>
                                        <div className="col text-left">
                                            <NavLink
                                                to="../bag"
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
                    <NavLink to="../" className="cross text-danger">
                        <i className="fas fa-times"></i>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Index;
