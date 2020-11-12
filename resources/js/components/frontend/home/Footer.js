import React from "react";

function Index() {
    return (
        <footer className="footer mt-auto bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md">
                                <h3 className="text-title">About Us</h3>

                                <ul>
                                    <li>
                                        <a href="#" className="links">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="links">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="links">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <h3 className="text-title">Customer Care</h3>
                                <ul>
                                    <li>
                                        <a href="#" className="links">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="links">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="links">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <h3 className="text-title">Contact us</h3>
                                <ul>
                                    <li>
                                        <a href="#" className="links">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="links">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="links">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className="text-title">
                            Subscribe To Our NewsLetter
                        </h3>

                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Email"
                                aria-describedby="button-addon2"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-info"
                                    type="button"
                                    id="button-addon2"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <img src={`${assetPath}storage/images/bkash.png`} />
                        <img src={`${assetPath}storage/images/nagad.png`} />
                        <img src={`${assetPath}storage/images/rocket.png`} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <a href="#" style={{ color: "rgb(0, 110, 255)" }}>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" style={{ color: "rgb(255, 0, 55)" }}>
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" style={{ color: "rgb(255, 0, 132)" }}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md text-muted text-center">
                        <a
                            href="#"
                            className="terms"
                            data-toggle="modal"
                            data-target="#termsModal"
                        >
                            Terms & Conditions
                        </a>
                        |
                        <a
                            href="#"
                            className="terms"
                            data-toggle="modal"
                            data-target="#privacyModal"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Index;
