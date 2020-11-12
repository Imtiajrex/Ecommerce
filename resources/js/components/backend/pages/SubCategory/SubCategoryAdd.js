import React from "react";
class SubCategoryAdd extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="modal fade"
                    id="sub_add"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="sub_add"
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
                                            Add New Sub Category
                                        </div>
                                    </div>
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <form role="form">
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter Category Name"
                                                        type="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <select className="form-control form-control-sm">
                                                    <option>
                                                        Select Parent Category
                                                    </option>
                                                </select>
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

export default SubCategoryAdd;
