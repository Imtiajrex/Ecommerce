import React from "react";

function Index() {
    return (
        <div className="top-products">
            <div className="title">
                <a>Our Top Categories</a>
                <a className="btn">See All</a>
            </div>
            <div className="products">
                <div className="product-div">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/1.jpeg`} />
                        </div>
                        <div className="name">Fashion</div>
                    </div>
                    <div className="sm-category">Fashion</div>
                </div>
                <div className="product-div">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/2.jpg`} />
                        </div>
                        <div className="name">Utensils</div>
                    </div>
                    <div className="sm-category">Utensils</div>
                </div>
                <div className="product-div">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/3.jpg`} />
                        </div>
                        <div className="name">Fragnance</div>
                    </div>
                    <div className="sm-category">Fragnance</div>
                </div>
                <div className="product-div">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/4.jpeg`} />
                        </div>
                        <div className="name">Baby Toys</div>
                    </div>
                    <div className="sm-category">Baby Toys</div>
                </div>
                <div className="product-div">
                    <div className="product">
                        <div className="image">
                            <img src={`${assetPath}storage/images/5.jpg`} />
                        </div>
                        <div className="name">Mobile</div>
                    </div>
                    <div className="sm-category">Mobile</div>
                </div>
            </div>
        </div>
    );
}

export default Index;
