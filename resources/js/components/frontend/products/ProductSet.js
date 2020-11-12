import React from "react";
class ProductSet extends React.Component {
    constructor() {
        super();
        this.slideIndex = 1;
        this.showSlides = this.showSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }
    plusSlides(n) {
        console.log(n);
        this.showSlides((this.slideIndex += n));
    }

    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        console.log(slides);
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "flex";
        dots[this.slideIndex - 1].className += " active";
    }
    componentDidMount() {
        this.showSlides(this.slideIndex);
    }
    render() {
        return (
            <>
                <div className="product-set row mb-3">
                    <div className="product-images col-md-6">
                        <div className="slider-container">
                            <div className="mySlides">
                                <img src={`${assetPath}storage/images/5.jpg`} />
                            </div>

                            <div className="mySlides">
                                <img src={`${assetPath}storage/images/3.jpg`} />
                            </div>
                            <a
                                className="prev"
                                onClick={() => {
                                    this.plusSlides(-1);
                                }}
                            >
                                ❮
                            </a>
                            <a
                                className="next"
                                onClick={() => {
                                    this.plusSlides(-1);
                                }}
                            >
                                ❯
                            </a>

                            <div className="row">
                                <div className="col">
                                    <img
                                        className="demo cursor"
                                        src={`${assetPath}storage/images/5.jpg`}
                                        onClick={() => {
                                            this.currentSlide(1);
                                        }}
                                    />
                                </div>
                                <div className="col">
                                    <img
                                        className="demo cursor"
                                        src={`${assetPath}storage/images/3.jpg`}
                                        onClick={() => {
                                            this.currentSlide(2);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-data col-md-6">
                        <div className="title">
                            <h1>Sic Mundus Creatus Est</h1>
                        </div>
                        <div className="review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            (250 Reviews)
                        </div>
                        <div className="price">৳ 2500</div>
                        <div className="short-description">
                            <a>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nam unde quo quos a eius.
                            </a>
                        </div>

                        <div className="selections">
                            <div className="form-group col-md-4">
                                <input
                                    type="number"
                                    className="form-control rounded-right"
                                    placeholder="Quantity"
                                    min="1"
                                    max="100"
                                />
                            </div>
                            <div className="pc">
                                <div className="cart">
                                    <div className="btn bag">Add To Bag</div>
                                    <div className="btn bag bg-warning text-dark">
                                        Buy Now
                                    </div>
                                </div>
                                <div className="security">
                                    <i className="far fa-check-circle"></i>
                                    Shop Secure. Free Returns.
                                </div>
                            </div>
                            <div className="mobile add_bag_buy_menu">
                                <div className="cart">
                                    <div className="btn bag">Add To Bag</div>
                                    <div className="btn bag bg-warning text-dark">
                                        Buy Now
                                    </div>
                                </div>
                                <div className="security">
                                    <i className="far fa-check-circle"></i>
                                    Shop Secure. Free Returns.
                                </div>
                            </div>
                            <div className="secondary-option">
                                <a href="#" className="options">
                                    Add To Wishlist
                                </a>
                            </div>
                            <div className="share">
                                Share
                                <a href="#">
                                    <i
                                        className="fab fa-facebook-f"
                                        style={{ color: "rgb(0, 132, 255)" }}
                                    ></i>
                                </a>
                                <a href="#">
                                    <i
                                        className="fab fa-youtube"
                                        style={{ color: "rgb(255, 0, 76)" }}
                                    ></i>
                                </a>
                                <a href="#">
                                    <i
                                        className="fab fa-instagram"
                                        style={{ color: "rgb(255, 0, 149)" }}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductSet;
