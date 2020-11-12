import React from "react";
import { NavLink } from "react-router-dom";

function Index() {
    return (
        <div className="featured">
            <div className="title">
                <a>Featured Products</a>
                <a className="btn">See All</a>
            </div>
            <div className="products">
                <NavLink to="/product">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/2.jpg`} />
                        </div>
                        <div className="details">
                            <h1 className="name">
                                Lorem Ipsum Prodm Ifhu Kiusa saiad
                            </h1>
                            <h3 className="price">৳ 150</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/product">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/3.jpg`} />
                        </div>
                        <div className="details">
                            <h1 className="name">
                                Lorem Ipsum Prodm Ifhu Kiusa saiad
                            </h1>
                            <h3 className="price">৳ 150</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/product">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/5.jpg`} />
                        </div>
                        <div className="details">
                            <h1 className="name">
                                Lorem Ipsum Prodm Ifhu Kiusa saiad
                            </h1>
                            <h3 className="price">৳ 150</h3>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Index;
