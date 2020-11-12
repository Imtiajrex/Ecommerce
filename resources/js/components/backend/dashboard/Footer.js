import React from "react";
class Footer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <footer className="footer pt-0">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6">
                            <div className="copyright text-center  text-lg-left  text-muted">
                                &copy; 2020{" "}
                                <a href="#" className="font-weight-bold ml-1">
                                    XISION.XYZ
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        XISILON.XYZ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
