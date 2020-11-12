import React from "react";
import { NavLink } from "react-router-dom";
class SideNav extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <nav
                    className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
                    id="sidenav-main"
                >
                    <div className="scrollbar-inner">
                        <div className="sidenav-header  align-items-center">
                            <a className="navbar-brand">
                                <img
                                    src={`${assetPath}storage/images/logo.png`}
                                    className="navbar-brand-img"
                                    alt="..."
                                />
                            </a>
                        </div>
                        <div className="navbar-inner">
                            <div
                                className="collapse navbar-collapse"
                                id="sidenav-collapse-main"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link active"
                                            to="/admin"
                                        >
                                            <i className="ni ni-tv-2 text-primary"></i>
                                            <span className="nav-link-text">
                                                Dashboard
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/admin/product/"
                                        >
                                            <i className="ni ni-planet text-orange"></i>
                                            <span className="nav-link-text">
                                                Product Management
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/admin/order/"
                                        >
                                            <i className="ni ni-pin-3 text-primary"></i>
                                            <span className="nav-link-text">
                                                Order Management
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/admin/pages/"
                                        >
                                            <i className="ni ni-bullet-list-67 text-default"></i>
                                            <span className="nav-link-text">
                                                Page Management
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/admin/discount/"
                                        >
                                            <i className="ni ni-key-25 text-info"></i>
                                            <span className="nav-link-text">
                                                Discount Management
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/admin/traffic/"
                                        >
                                            <i className="ni ni-world text-green"></i>
                                            <span className="nav-link-text">
                                                Traffic Management
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/admin/store/"
                                        >
                                            <i className="ni ni-send text-dark"></i>
                                            <span className="nav-link-text">
                                                Store Management
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/admin/profile/"
                                        >
                                            <i className="ni ni-single-02 text-yellow"></i>
                                            <span className="nav-link-text">
                                                Profile
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default SideNav;
