import React from "react";
import Detailed from "./Detailed";
import Nav from "./Nav";
import Overview from "./Overview";
import ProductWise from "./ProductWise";
class Traffic extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Nav />
                <div className="tab-content" id="myTabContent">
                    <Overview />
                    <Detailed />
                    <ProductWise />
                </div>
            </>
        );
    }
}

export default Traffic;
