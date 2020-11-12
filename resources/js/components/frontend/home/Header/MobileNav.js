import React, { Component } from "react";
import SideNav from "./SideNav";
class Index extends Component {
    constructor() {
        super();
        this.openNav = this.openNav.bind(this);
        this.searchToggle = this.searchToggle.bind(this);
    }
    componentDidMount() {}
    openNav() {
        let sidenav = document.getElementById("sidenav");
        console.log(sidenav);
        if (sidenav != null) sidenav.style.transform = "translateX(0px)";
    }
    searchToggle() {
        let searchDiv = $(".mobile-search");
        if (searchDiv.hasClass("search-hide")) {
            searchDiv.removeClass("search-hide");
        } else {
            searchDiv.addClass("search-hide");
        }
    }
    render() {
        return (
            <>
                <SideNav id="sidenav" />
                <div className="mobile-nav mobile">
                    <div className="nav">
                        <div className="left">
                            <a
                                className="sidenav-toggler"
                                onClick={this.openNav}
                            >
                                <i className="fas fa-bars"></i>
                            </a>
                        </div>
                        <div className="middle">
                            <img src={`${assetPath}storage/images/logo.png`} />
                        </div>
                        <div className="right">
                            <a className="search" onClick={this.searchToggle}>
                                <i className="fas fa-search"></i>
                            </a>
                        </div>
                        <div className="mobile-search search-hide">
                            <div className="search">
                                <div
                                    className="close-icon"
                                    onClick={this.searchToggle}
                                >
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="search-box">
                                    <input
                                        type="text"
                                        placeholder="Search Here..."
                                    />
                                </div>
                                <div className="search-btn-div">
                                    <a className="search-btn">
                                        <i className="fas fa-search"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
