import React from "react";

function Index() {
    return (
        <div className="top-bar pc">
            <div className="top-left">
                <div className="dropdown">
                    <a
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        EN
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <a className="dropdown-item" href="#">
                            BN
                        </a>
                        <a className="dropdown-item" href="#">
                            EN
                        </a>
                    </div>
                </div>
            </div>
            <div className="top-right">
                <ul>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#wishlist">
                            My Wishlist
                        </a>
                    </li>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#signin">
                            Sign In
                        </a>
                    </li>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#register">
                            Register
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Index;
