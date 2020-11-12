import React from "react";
import "./styles/style.css";
import Top from "./Top";
import Content from "./Content";
function Index() {
    return (
        <div className="checkout-component">
            <div className="wrapper">
                <div className="container-fluid">
                    <Top></Top>
                </div>
                <Content></Content>
            </div>
        </div>
    );
}

export default Index;
