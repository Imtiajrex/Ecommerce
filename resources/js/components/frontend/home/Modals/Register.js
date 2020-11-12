import React from "react";
function Index() {
    return (
        <>
            <div
                className="modal fade"
                id="register"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="register"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal- modal-dialog-centered modal-sm"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-header bg-transparent pb-5">
                                    <div className="text-muted text-center mt-2 mb-3">
                                        Register
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <form role="form">
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="ni ni-user"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="ni ni-email-83"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    placeholder="Email"
                                                    type="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="ni ni-lock-circle-open"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    placeholder="Password"
                                                    type="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id=" customCheckLogin"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor=" customCheckLogin"
                                            >
                                                <span className="text-muted">
                                                    Remember me
                                                </span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="button"
                                                className="btn btn-primary my-4"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
