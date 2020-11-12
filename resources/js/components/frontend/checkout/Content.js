import React from "react";
import Order from "./Order";
import BillingDetails from "./BillingDetails";
function Index() {
    return (
        <div class="content row mt-5 mb-5 ml-auto mr-auto">
            <BillingDetails></BillingDetails>
            <Order></Order>
        </div>
    );
}

export default Index;
