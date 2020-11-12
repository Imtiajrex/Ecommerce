import React from "react";
import "./styles/slider.css";
import "./styles/style.css";
import Top from "./Top";
import ProductSet from "./ProductSet";
import ProductExpand from "./ProductExpand";
import RelatedProducts from "./RelatedProducts";
function Index() {
    return (
        <div className="product-component">
            <div className="wrapper">
                <div className="container-fluid">
                    <Top></Top>
                    <ProductSet></ProductSet>
                    <ProductExpand></ProductExpand>
                    <RelatedProducts></RelatedProducts>
                </div>
            </div>
        </div>
    );
}

export default Index;
