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
                <div className="col-11">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <NavLink to="../">Home</NavLink>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Shopping Bag
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-1 text-right">
                    <NavLink to="../" className="cross text-danger">
                        <i className="fas fa-times"></i>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Index;
