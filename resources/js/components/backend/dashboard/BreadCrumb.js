import React from "react";
class BreadCrumb extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="row align-items-center p-4 bg-primary m-0 ">
                    <div className="col-lg-6 col-7">
                        <h6 className="h2 text-white d-inline-block mb-0">
                            Default
                        </h6>
                        <nav
                            aria-label="breadcrumb"
                            className="d-none d-md-inline-block ml-md-4"
                        >
                            <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li className="breadcrumb-item">
                                    <a href="#">
                                        <i className="fas fa-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Dashboards</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Default
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}

export default BreadCrumb;
