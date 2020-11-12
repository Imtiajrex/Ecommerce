import React from "react";
import Pie from "./Pie";
class Overview extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="tab-pane fade show text-center active"
                    id="overview"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                >
                    <div className="d-flex justify-content-center mt-5">
                        <div className="card bg-default store-card">
                            <div className="card-header bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                for="example-date-input"
                                                class="form-control-label"
                                            >
                                                Select Date
                                            </label>
                                            <input
                                                className="form-control"
                                                type="date"
                                                id="example-date-input"
                                            />
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
                                    <Pie />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Overview;
