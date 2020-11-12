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
                                            New Coupon
                                        </div>
                                    </div>
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <form role="form">
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Coupon Code"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <select
                                                        className="form-control"
                                                        placeholder="Enter User Name"
                                                        type="text"
                                                    >
                                                        <option>
                                                            Select Coupon Type
                                                        </option>
                                                        <option>
                                                            Free Delivery
                                                        </option>
                                                        <option>
                                                            Discount
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Discount Amount"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <select
                                                        className="form-control"
                                                        placeholder="Enter User Name"
                                                        type="text"
                                                    >
                                                        <option>
                                                            Select Amount Type
                                                        </option>
                                                        <option>Percent</option>
                                                        <option>Cash</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>
                                                    Select Coupon Applicable
                                                    Products
                                                </label>
                                                <div className="input-group input-group-merge input-group-alternative p-3">
                                                    <label>Product 1</label>
                                                    <label class="custom-toggle">
                                                        <input type="checkbox" />
                                                        <span class="custom-toggle-slider rounded-circle"></span>
                                                    </label>
                                                </div>
                                                <div className="input-group input-group-merge input-group-alternative p-3">
                                                    <label>Product 2</label>
                                                    <label class="custom-toggle">
                                                        <input type="checkbox" />
                                                        <span class="custom-toggle-slider rounded-circle"></span>
                                                    </label>
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
