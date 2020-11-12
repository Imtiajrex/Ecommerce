import React from "react";
function Index() {
    return (
        <>
            <div className="product-expand row mb-5">
                <div className="col card">
                    <div className="card-header">
                        <div className="nav-wrapper">
                            <ul
                                className="nav nav-pills nav-fill flex-column flex-md-row"
                                id="tabs-icons-text"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className="nav-link mb-sm-3 mb-md-0 active"
                                        id="tabs-icons-text-1-tab"
                                        data-toggle="tab"
                                        href="#description"
                                        role="tab"
                                        aria-controls="description"
                                        aria-selected="true"
                                    >
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link mb-sm-3 mb-md-0"
                                        id="tabs-icons-text-2-tab"
                                        data-toggle="tab"
                                        href="#reviews"
                                        role="tab"
                                        aria-controls="reviews"
                                        aria-selected="false"
                                    >
                                        Reviews
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link mb-sm-3 mb-md-0"
                                        id="tabs-icons-text-3-tab"
                                        data-toggle="tab"
                                        href="#ship"
                                        role="tab"
                                        aria-controls="ship"
                                        aria-selected="false"
                                    >
                                        Shipping Info
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="description"
                                role="tabpanel"
                                aria-labelledby="tabs-icons-text-1-tab"
                            >
                                <div className="row">
                                    <div className="col">
                                        <div className="title">
                                            Product Description
                                        </div>
                                        <div className="content">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Saepe,
                                            doloribus? Fuga veniam unde ipsam?
                                            Velit illum veritatis voluptas
                                            explicabo voluptatem, fugit neque
                                            deserunt at soluta nesciunt? Eos,
                                            non magnam! Sunt.
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <div className="title">
                                            Product details
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="details col-md-5">
                                        <div className="row">
                                            <div className="col-4">Size</div>
                                            <div className="col-4">-</div>
                                            <div className="col-4">15"-18"</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">Color</div>
                                            <div className="col-4">-</div>
                                            <div className="col-4">
                                                Red | Green | Black
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                Durability
                                            </div>
                                            <div className="col-4">-</div>
                                            <div className="col-4">
                                                72 hours
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                Warranty
                                            </div>
                                            <div className="col-4">-</div>
                                            <div className="col-4">5years</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">Free</div>
                                            <div className="col-4">-</div>
                                            <div className="col-4">Charger</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="reviews"
                                role="tabpanel"
                                aria-labelledby="tabs-icons-text-2-tab"
                            >
                                <div
                                    className="card mt-5 ml-auto mr-auto "
                                    style={{ maxWidth: "690px" }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="col">
                                                    <img
                                                        src={`${assetPath}storage/images/user.png`}
                                                        className="card-img"
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Roger Smith
                                                </h5>
                                                <p className="card-text">
                                                    This is a wider card with
                                                    supporting text below as a
                                                    natural lead-in to
                                                    additional content.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Posted 27.03.2020
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card mt-5 ml-auto mr-auto "
                                    style={{ maxWidth: "690px" }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="col">
                                                    <img
                                                        src={`${assetPath}storage/images/user.png`}
                                                        className="card-img"
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Roger Smith
                                                </h5>
                                                <p className="card-text">
                                                    This is a wider card with
                                                    supporting text below as a
                                                    natural lead-in to
                                                    additional content.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Posted 27.03.2020
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card mt-5 ml-auto mr-auto "
                                    style={{ maxWidth: "690px" }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="col">
                                                    <img
                                                        src={`${assetPath}storage/images/user.png`}
                                                        className="card-img"
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 mb-5">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Roger Smith
                                                </h5>
                                                <p className="card-text">
                                                    This is a wider card with
                                                    supporting text below as a
                                                    natural lead-in to
                                                    additional content.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Posted 27.03.2020
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="ship"
                                role="tabpanel"
                                aria-labelledby="tabs-icons-text-3-tab"
                            >
                                <div className="row">
                                    <div className="col info">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ratione, amet? Saepe
                                        maiores nostrum est. Molestias nobis
                                        aspernatur at ipsa vero facilis ea.
                                    </div>
                                </div>
                                <div className="row p-sm-3 mt-3">
                                    <div className="details col-md-7">
                                        <div className="row">
                                            <div className="col-4">Express</div>
                                            <div className="col-4">
                                                &lt; 24 Hours
                                            </div>
                                            <div className="col-4">৳ 150</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                Fast Lane
                                            </div>
                                            <div className="col-4">2 days</div>
                                            <div className="col-4">৳ 100</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                Standard
                                            </div>
                                            <div className="col-4">3 Days </div>
                                            <div className="col-4">৳ 50</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
