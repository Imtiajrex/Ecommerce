import React from "react";
class Detailed extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="tab-pane fade show text-center"
                    id="detailed"
                    role="tabpanel"
                    aria-labelledby="detailed-tab"
                >
                    <div className="table-responsive bg-default">
                        <div>
                            <div className="p-3 pl-md-5">
                                <h1 style={{ color: "#4d7bca" }}>
                                    Detailed Traffic Stats
                                </h1>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label
                                                for="example-date-input"
                                                class="form-control-label"
                                            >
                                                From
                                            </label>
                                            <input
                                                className="form-control"
                                                type="date"
                                                id="example-date-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label
                                                for="example-date-input"
                                                class="form-control-label"
                                            >
                                                To
                                            </label>
                                            <input
                                                className="form-control"
                                                type="date"
                                                id="example-date-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="table align-items-center table-dark">
                                <thead className="thead-dark">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="sort"
                                            data-sort="name"
                                        >
                                            #
                                        </th>
                                        <th scope="col">Page Name</th>
                                        <th scope="col">Visitors</th>
                                        <th scope="col">Unique Users</th>
                                        <th scope="col">Average time</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="list">
                                    <tr>
                                        <th scope="row">1</th>
                                        <th>
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    Product 101
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    1500
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    750
                                                </div>
                                            </div>
                                        </th>
                                        <td className="text-info">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    25.00s
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-info">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    23.02.2020
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Detailed;
