import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
    return (
        <>
            <div className="mobile-menu mobile">
                <div className="menu">
                    <ul>
                        <li className="active">
                            <NavLink to="/">
                                <i className="fas fa-home"></i>Home
                            </NavLink>
                        </li>
                        <li>
                            <a data-toggle="modal" data-target="#wishlist">
                                <i className="fas fa-heart"></i>
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <NavLink to="bag">
                                <i className="fas fa-shopping-bag"></i>
                                Bag
                            </NavLink>
                        </li>
                        <li>
                            <a>
                                <i className="fas fa-history"></i>
                                History
                            </a>
                        </li>
                        <li>
                            <a data-toggle="modal" data-target="#signin">
                                <i className="fas fa-user-astronaut"></i>
                                Account
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
