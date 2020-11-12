import React from "react";
import "./styles/style.css";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";
import Modals from "./Modals";
import MobileMenu from "./MobileMenu";
function Home() {
    $(function() {
        $(".bag-btn").dropdown();
        $('[data-toggle="tooltip"]').tooltip();
        $(".collapse").collapse({
            toggle: false
        });
        $(".carousel").carousel({
            interval: 10000
        });
    });

    return (
        <div className="home-component">
            <Header></Header>
            <Contents />
            <Footer></Footer>
            <Modals />
            <MobileMenu />
        </div>
    );
}

export default Home;
