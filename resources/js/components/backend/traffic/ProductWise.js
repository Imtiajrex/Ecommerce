import React from "react";
import Line from "./Line";
class ProductWise extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="tab-pane fade show text-center"
                    id="product_wise"
                    role="tabpanel"
                    aria-labelledby="product_wise-tab"
                >
                    <div className="d-flex justify-content-center mt-5">
                        <div className="card bg-default store-card">
                            <div className="card-header bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>Select Product</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-light text-uppercase ls-1 mb-1">
                                            Overview
                                        </h6>
                                        <h5 className="h3 text-white mb-0">
                                            Top Traffic Pages
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart">
                                    <div className="chartjs-size-monitor">
                                        <div className="chartjs-size-monitor-expand">
                                            <div className=""></div>
                                        </div>
                                        <div className="chartjs-size-monitor-shrink">
                                            <div className=""></div>
                                        </div>
                                    </div>
                                    <Line />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductWise;
