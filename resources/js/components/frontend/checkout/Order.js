import React from "react";
import PaymentMethod from "./PaymentMethod";
import OrderList from "./OrderList";
function Index() {
    return (
        <div className="col-md-5">
            <div className="title">
                <h1 style={{ fontSize: "26px" }}>Your Order</h1>
            </div>

            <OrderList></OrderList>

            <PaymentMethod></PaymentMethod>
            <div className="row mt-3 pc">
                <div className="col">
                    <a className="btn btn-success w-100">Place Order</a>
                </div>
            </div>
            <div className="row mobile order">
                <div className="col text-center">
                    <small className="text-muted">Total: 1600৳</small>
                </div>
                <div className="col">
                    <a className="btn btn-success w-100">Place Order</a>
                </div>
            </div>
        </div>
    );
}

export default Index;
