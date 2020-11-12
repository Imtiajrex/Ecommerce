import React from "react";
import SideNav from "./dashboard/SideNav";
import TopNav from "./dashboard/TopNav";
import BreadCrumb from "./dashboard/BreadCrumb";
import Content from "./Content";
class Dashboard extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <SideNav />
                <div className="main-content" id="panel">
                    <TopNav />
                    <BreadCrumb />
                    <div className="w-100 content-container">
                        <Content />
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;
