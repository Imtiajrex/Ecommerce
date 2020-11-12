import React from "react";
class Nav extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default">
                    <div className="container">
                        <ul
                            className="nav nav-pills nav-fill flex-column flex-sm-row"
                            id="tabs-text"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a
                                    href="#category"
                                    className="nav-link mb-sm-3 mb-md-0 active"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="category"
                                    aria-selected="true"
                                >
                                    Categories
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#sub_category"
                                    className="nav-link mb-sm-3 mb-md-0"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="subcategory"
                                    aria-selected="false"
                                >
                                    Sub Categories
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#home"
                                    className="nav-link mb-sm-3 mb-md-0"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="false"
                                >
                                    HomePage
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#product"
                                    className="nav-link mb-sm-3 mb-md-0"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="product"
                                    aria-selected="false"
                                >
                                    Product Page
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Nav;
