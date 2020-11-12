import React from "react";
class Add extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="modal fade"
                    id="add"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="add"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal- modal-dialog-centered modal-sm"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="card bg-secondary border-0 mb-0">
                                    <div className="card-header bg-transparent">
                                        <div className="text-muted text-center mt-2 mb-3">
                                            New Admin User
                                        </div>
                                    </div>
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <form role="form">
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter Full Name"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter User Name"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter Password"
                                                        type="password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary my-4"
                                                >
                                                    Submit
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
}

export default Add;
