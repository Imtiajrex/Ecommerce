import React from "react";

function Index() {
    return (
        <div className="nav-bar pc">
            <ul>
                <li>
                    <a href="">New Arrivals</a>
                </li>
                <li className="hover-dropdown">
                    <a href="">Clothing</a>
                    <i className="fas fa-caret-down"></i>
                    <div className="dropdown-content">
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
                <li className="hover-dropdown">
                    <a href="">Electronics</a>
                    <i className="fas fa-caret-down"></i>
                    <div className="dropdown-content">
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
                <li className="hover-dropdown">
                    <a href="">Home Appliances</a>
                    <i className="fas fa-caret-down"></i>
                    <div className="dropdown-content">
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
                <li className="hover-dropdown">
                    <a href="">Cosmetics</a>
                    <i className="fas fa-caret-down"></i>
                    <div className="dropdown-content">
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
                <li className="hover-dropdown">
                    <a href="">Medicine</a>
                    <i className="fas fa-caret-down"></i>
                    <div className="dropdown-content">
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
                <li className="hover-dropdown">
                    <a href="">Health & Beauty</a>
                    <i className="fas fa-caret-down"></i>
                    <div className="dropdown-content">
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
                <li className="hover-dropdown">
                    <a href="">Babies & Toys</a>
                    <i className="fas fa-caret-down"></i>
                    <div className="dropdown-content">
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
