import React from "react";
function Index() {
    return (
        <>
            <div className="related-products">
                <div className="title">
                    <a>Recommended Products</a>
                    <a className="btn">See All</a>
                </div>
                <div className="products">
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
                </div>
            </div>
        </>
    );
}

export default Index;
