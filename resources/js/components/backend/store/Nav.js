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
                                    href="#admin"
                                    className="nav-link mb-sm-3 mb-md-0 active"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="admin"
                                    aria-selected="true"
                                >
                                    Admin Management
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#store"
                                    className="nav-link mb-sm-3 mb-md-0"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="store"
                                    aria-selected="false"
                                >
                                    Store Details
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
