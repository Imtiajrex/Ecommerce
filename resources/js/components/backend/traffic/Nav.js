import React from "react";
class Nav extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default">
                    <div className="container justify-content-center">
                        <ul
                            className="nav nav-pills nav-fill flex-column flex-sm-row"
                            id="tabs-text"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a
                                    href="#overview"
                                    className="nav-link mb-sm-3 mb-md-0 active"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="overview"
                                    aria-selected="true"
                                >
                                    Traffic Overview
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#detailed"
                                    className="nav-link mb-sm-3 mb-md-0"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="detailed"
                                    aria-selected="false"
                                >
                                    Detailed Traffic Stats
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#product_wise"
                                    className="nav-link mb-sm-3 mb-md-0"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="product_wise"
                                    aria-selected="false"
                                >
                                    Product Wise Traffic Stats
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
