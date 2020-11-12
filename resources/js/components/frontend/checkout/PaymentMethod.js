import React from "react";
function Index() {
    return (
        <div className="accordion" id="accordion">
            <div className="card mt-5">
                <div className="card-header">
                    <h1>Payment System</h1>
                </div>
                <div className="card-body p-0">
                    <div className="card">
                        <div className="card-header">
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                    >
                                        Cash On Delivery
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                        data-toggle="collapse"
                                        data-target="#bkashCollapse"
                                        aria-expanded="false"
                                        aria-controls="bkashCollapse"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio2"
                                    >
                                        Bkash{" "}
                                        <img
                                            src={`${assetPath}storage/images/bkash.png`}
                                            alt="bkash"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div
                            className="collapse"
                            id="bkashCollapse"
                            data-parent="#accordion"
                        >
                            <div className="card-body">
                                <div className="text-muted">
                                    Send Money to 01624604980 using Bkash.(1.85%
                                    fee included as bkash Charge)
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        placeholder="ex: 01615943246"
                                    >
                                        Bkash Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                        Bkash Transaction ID
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="ex: 165987654981"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio3"
                                        value="option3"
                                        data-toggle="collapse"
                                        data-target="#nagadCollapse"
                                        aria-expanded="false"
                                        aria-controls="nagadCollapse"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio3"
                                    >
                                        Nagad{" "}
                                        <img
                                            src={`${assetPath}storage/images/nagad.png`}
                                            alt="bkash"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div
                            className="collapse"
                            id="nagadCollapse"
                            data-parent="#accordion"
                        >
                            <div className="card-body">
                                <div className="text-muted">
                                    Send Money to 01624604980 using Nagad.(1.85%
                                    fee included as nagad Charge)
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Nagad Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="ex: 01615943246"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                        Nagad Transaction ID
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="ex: 165987654981"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio4"
                                        value="option4"
                                        data-toggle="collapse"
                                        data-target="#rocketCollapse"
                                        aria-expanded="false"
                                        aria-controls="rocketCollapse"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio4"
                                    >
                                        Rocket{" "}
                                        <img
                                            src={`${assetPath}storage/images/rocket.png`}
                                            alt="rocket"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div
                            className="collapse"
                            id="rocketCollapse"
                            data-parent="#accordion"
                        >
                            <div className="card-body">
                                <div className="text-muted">
                                    Send Money to 01624604980 using
                                    Rocket.(1.85% fee included as rocket Charge)
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Rocket Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="ex: 01615943246"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                        Rocket Transaction ID
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="ex: 165987654981"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
