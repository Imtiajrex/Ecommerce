import React from "react";
import Dashboard from "./Dashboard";
import "./styles/style.css";
class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            sidenav_toggle: false
        };
    }
    componentDidMount() {
        //SideNav Toggler
        $(".sidenav-toggler").on("click", () => {
            toggleSidenav();
        });
        $(document).on("click", e => {
            if (
                $(e.target).closest("#sidenav-main").length === 0 &&
                $(e.target).closest(".sidenav-toggler").length === 0 &&
                this.state.sidenav_toggle
            ) {
                toggleSidenav(1);
            }
        });
        let toggleSidenav = (i = 0) => {
            if (!this.state.sidenav_toggle) {
                $("#sidenav-main").css("transform", "translateX(0)");
                this.setState({ sidenav_toggle: true });
            } else {
                $("#sidenav-main").css("transform", "translateX(-250px)");
                this.setState({ sidenav_toggle: false });
            }
        };
    }

    render() {
        return <Dashboard />;
    }
}

export default Admin;
