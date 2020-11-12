import React from "react";
import Nav from "./Nav";
import Admin from "./AdminManagement/Index";
import StoreDetails from "./StoreDetails/Index";
class Pages extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Nav />

                <div className="tab-content" id="myTabContent">
                    <Admin />
                    <StoreDetails />
                </div>
            </>
        );
    }
}

export default Pages;
