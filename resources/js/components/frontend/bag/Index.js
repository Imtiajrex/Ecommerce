import React from "react";
import "./styles/style.css";
import Top from "./Top";
import ShoppingBag from "./ShoppingBag";
import MobileCheckoutMenu from "./MobileCheckoutMenu";
function Index() {
    return (
        <div className="bag-component">
            <div className="wrapper">
                <Top></Top>
                <div className="content row shadow mt-5">
                    <ShoppingBag></ShoppingBag>
                </div>
                <MobileCheckoutMenu></MobileCheckoutMenu>
            </div>
        </div>
    );
}

export default Index;
