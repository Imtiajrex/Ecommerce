import React from "react";
import { NavLink } from "react-router-dom";
function Index() {
    return (
        <div>
            <div className="mobile checkout-menu">
                <div className="row">
                    <div className="col-12 mt-1">
                        <a className="btn btn-outline-info total">
                            Total: 1500 ৳
                        </a>
                    </div>
                    <div className="col-12 mt-1">
                        <NavLink
                            to="../Checkout/"
                            className="btn btn-success checkout"
                        >
                            Checkout
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
