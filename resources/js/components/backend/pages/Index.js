import React from "react";
import Nav from "./Nav";
import Category from "./Category/Category";
import SubCategory from "./SubCategory/SubCategory";
class Pages extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Nav />

                <div className="tab-content" id="myTabContent">
                    <Category />
                    <SubCategory />
                    <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    ></div>
                    <div
                        className="tab-pane fade show active"
                        id="product"
                        role="tabpanel"
                        aria-labelledby="product-tab"
                    ></div>
                </div>
            </>
        );
    }
}

export default Pages;
