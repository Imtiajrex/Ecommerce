import React from "react";

function Index() {
    function closeNav() {
        let sidenav = document.getElementById("sidenav");
        if (sidenav != null) sidenav.style.transform = "translateX(-250px)";
    }
    return (
        <div id="sidenav" className="sidenav mobile">
            <a className="closebtn" onClick={closeNav}>
                &times;
            </a>
            <ul>
                <li>
                    <a href="">New Arrivals</a>
                </li>
                <li>
                    <a
                        href="#collapse1"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse1"
                    >
                        Clothing <i className="fas fa-caret-down"></i>
                    </a>
                    <div className="collapse" id="collapse1">
                        <ul>
                            <li>
                                <a href="#">T-shirt</a>
                            </li>
                            <li>
                                <a href="#">Hoodie</a>
                            </li>
                            <li>
                                <a href="#">Shirt</a>
                            </li>
                            <li>
                                <a href="#">Jeans</a>
                            </li>
                            <li>
                                <a href="#">Panjabi</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        href="#collapse2"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse1"
                    >
                        Electronics <i className="fas fa-caret-down"></i>
                    </a>
                    <div className="collapse" id="collapse2">
                        <ul>
                            <li>
                                <a href="#">Mobile</a>
                            </li>
                            <li>
                                <a href="#">Laptop</a>
                            </li>
                            <li>
                                <a href="#">PC</a>
                            </li>
                            <li>
                                <a href="#">Sound System</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        href="#collapse3"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse3"
                    >
                        Home Appliances <i className="fas fa-caret-down"></i>
                    </a>
                    <div className="collapse" id="collapse3">
                        <ul>
                            <li>
                                <a href="#">Furniture</a>
                            </li>
                            <li>
                                <a href="#">Home Assistant</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        href="#collapse4"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse4"
                    >
                        Cosmetics <i className="fas fa-caret-down"></i>
                    </a>
                    <div className="collapse" id="collapse4">
                        <ul>
                            <li>
                                <a href="#">Lipstick</a>
                            </li>
                            <li>
                                <a href="#">Foundation</a>
                            </li>
                            <li>
                                <a href="#">Makeup Pack</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        href="#collapse5"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse5"
                    >
                        Medicine <i className="fas fa-caret-down"></i>
                    </a>
                    <div className="collapse" id="collapse5">
                        <ul>
                            <li>
                                <a href="#">Over The Counter</a>
                            </li>
                            <li>
                                <a href="#">Fever</a>
                            </li>
                            <li>
                                <a href="#">Headache</a>
                            </li>
                            <li>
                                <a href="#">Body Ache</a>
                            </li>
                            <li>
                                <a href="#">Stomach Pain</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        href="#collapse6"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse6"
                    >
                        Health & Beauty <i className="fas fa-caret-down"></i>
                    </a>
                    <div className="collapse" id="collapse6">
                        <ul>
                            <li>
                                <a href="#">Face Wash</a>
                            </li>
                            <li>
                                <a href="#">Scrub</a>
                            </li>
                            <li>
                                <a href="#">Exfoliation Pack</a>
                            </li>
                            <li>
                                <a href="#">Face Pack</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        href="#collapse7"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse7"
                    >
                        Babies & Toys <i className="fas fa-caret-down"></i>
                    </a>
                    <div className="collapse" id="collapse7">
                        <ul>
                            <li>
                                <a href="#">Remote-Controlled</a>
                            </li>
                            <li>
                                <a href="#">Lego Set</a>
                            </li>
                            <li>
                                <a href="#">Doll Set</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Index;
