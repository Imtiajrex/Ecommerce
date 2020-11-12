import React from "react";
function Index() {
    return (
        <div className="card">
            <div className="card-header p-0">
                <table className="table m-0">
                    <thead>
                        <tr>
                            <th className="p-3">Product</th>
                            <th className="p-3">SubTotal</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="card-body p-0">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="p-3" style={{ borderTop: "none" }}>
                                Sic Mundus(<a className="text-muted">x1</a>)
                            </td>
                            <td className="p-3" style={{ borderTop: "none" }}>
                                650 ৳
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3" style={{ borderTop: "none" }}>
                                Creatus Est(<a className="text-muted">x1</a>)
                            </td>
                            <td className="p-3" style={{ borderTop: "none" }}>
                                850 ৳
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 text-muted">Sub Total:</td>
                            <td className="p-3 text-muted">1500 ৳</td>
                        </tr>
                        <tr>
                            <td className="p-3 text-muted">Shipping:</td>
                            <td className="p-3 text-muted">100 ৳</td>
                        </tr>
                        <tr>
                            <th className="p-3 text-success">Total:</th>
                            <th className="p-3 text-success">1600 ৳</th>
                        </tr>
                        <tr>
                            <th
                                colSpan="2"
                                className="p-3"
                                style={{ borderTop: "none" }}
                            >
                                <a
                                    className="btn btn-primary w-100"
                                    data-toggle="collapse"
                                    href="#coupon"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="coupon"
                                >
                                    Have A Coupon Code?
                                </a>
                                <div className="collapse mt-3" id="coupon">
                                    <div className="input-group mb-3 w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Coupon Code"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-success"
                                                type="button"
                                            >
                                                ৳
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Index;
