import React from "react";
function Index() {
    return (
        <div className="col-md-7 mb-3">
            <div className="card bill-form">
                <div className="card-header title">
                    <h1>Billing Details</h1>
                </div>

                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: Imtiaj"
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: 01624604980"
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your number with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="ex: Imtiajrex@gmail.com"
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your email with anyone else.
                            </small>
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlSelect1">
                                Country
                            </label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                            >
                                <option>Bangladesh</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">
                                District
                            </label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                            >
                                <option>Select District</option>
                                <option>Noakhali</option>
                                <option>Feni</option>
                                <option>Chittagong</option>
                                <option>Dhaka</option>
                                <option>Comilla</option>
                                <option>Sylhet</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Thana</label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                            >
                                <option>Select Thana</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Area</label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                            >
                                <option>Select Area</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">
                                Street Address
                            </label>
                            <textarea
                                className="form-control"
                                placeholder="ex: Saraipara, Pahartali"
                            ></textarea>
                            <small className="text-muted">
                                Delivery Place!
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Index;
