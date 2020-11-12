import React from "react";
import TopBar from "./Header/TopBar";
import TopSecondBar from "./Header/TopSecondBar";
import NavBar from "./Header/NavBar";
import MobileNav from "./Header/MobileNav";
import Slideshow from "./Header/Slideshow";

function Home() {
    return (
        <div className="header">
            <TopBar></TopBar>
            <TopSecondBar></TopSecondBar>
            <NavBar></NavBar>
            <MobileNav></MobileNav>
            <Slideshow></Slideshow>
        </div>
    );
}

export default Home;
