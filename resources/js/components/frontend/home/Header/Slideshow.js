import React from "react";

function Index() {
    return (
        <div className="slideshow">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="bg-dark slides">
                            <div className="left">
                                <div></div>
                            </div>
                            <div className="right">
                                <h1 className="text-white">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                </h1>
                                <h3 className="text-light">
                                    Sunt, recusandae, libero ex adipisci
                                    doloribus odio tempore fugiat maxime
                                    possimus cupiditate, inventore ratione nulla
                                    fugit esse sequi magnam autem accusantium
                                    accusamus?
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="bg-danger slides">
                            <div className="left">
                                <div></div>
                            </div>
                            <div className="right">
                                <h1 className="text-white">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                </h1>
                                <h3 className="text-light">
                                    Sunt, recusandae, libero ex adipisci
                                    doloribus odio tempore fugiat maxime
                                    possimus cupiditate, inventore ratione nulla
                                    fugit esse sequi magnam autem accusantium
                                    accusamus?
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="bg-info slides">
                            <div className="left">
                                <div></div>
                            </div>
                            <div className="right">
                                <h1 className="text-white">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                </h1>
                                <h3 className="text-light">
                                    Sunt, recusandae, libero ex adipisci
                                    doloribus odio tempore fugiat maxime
                                    possimus cupiditate, inventore ratione nulla
                                    fugit esse sequi magnam autem accusantium
                                    accusamus?
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Index;
