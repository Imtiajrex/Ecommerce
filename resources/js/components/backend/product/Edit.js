import React from "react";
class Edit extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="card bg-secondary border-0 mb-0">
                    <div className="card-header bg-transparent">
                        <div className="text-muted text-center">
                            <h1>Edit Product Page</h1>
                        </div>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <div className="form-group mb-3">
                                <div className="form-group">
                                    <label>Product Title</label>
                                    <textarea
                                        className="form-control"
                                        rows="7"
                                        placeholder="Product Title"
                                        maxLength="250"
                                        style={{
                                            resize: "none"
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="form-group">
                                    <label>Product Description</label>
                                    <textarea
                                        id="summernote"
                                        className="form-control"
                                        rows="7"
                                        placeholder="Product Title"
                                        maxLength="250"
                                        style={{
                                            resize: "none"
                                        }}
                                    ></textarea>
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
            </>
        );
    }
}

export default Edit;
