import React from "react";
import { NavLink } from "react-router-dom";
class Add extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="card bg-secondary border-0 mb-0">
                    <div className="card-header bg-transparent">
                        <div className="text-muted text-center">
                            <h1>Add Product Page</h1>
                        </div>
                        <NavLink
                            to="/admin/product"
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </NavLink>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <div className="form-group mb-3">
                                <div className="form-group">
                                    <label>Product Title</label>
                                    <textarea
                                        className="form-control"
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
                                        placeholder="Product Description"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="customFileLang"
                                        lang="en"
                                        multiple
                                    />
                                    <label
                                        class="custom-file-label"
                                        htmlFor="customFileLang"
                                    >
                                        Select file
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label>Organize Images</label>
                                <div
                                    className="bg-default w-100"
                                    style={{ minHeight: "3px" }}
                                ></div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-primary my-4 btn-block"
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

export default Add;
