import React from "react";
import Cards from "./Cards";
class MainContent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Cards />
                <div className="row p-md-3" style={{ margin: 0 }}>
                    <div className="col-xl-8 ">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Latest Orders</h3>
                                    </div>
                                    <div className="col text-right">
                                        <a
                                            href="#!"
                                            className="btn btn-sm btn-primary"
                                        >
                                            See all
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Order Date</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Tshirt</td>
                                            <td>Roger</td>
                                            <td>Production</td>
                                            <td>27.03.2020</td>
                                            <td>500৳</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Jeans</td>
                                            <td>Smith</td>
                                            <td>Completed</td>
                                            <td>1.08.2020</td>
                                            <td>2500৳</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 ">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Page visits</h3>
                                    </div>
                                    <div className="col text-right">
                                        <a
                                            href="#!"
                                            className="btn btn-sm btn-primary"
                                        >
                                            See all
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Page name</th>
                                            <th scope="col">Visitors</th>
                                            <th scope="col">Unique users</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">/argon/</th>
                                            <td>4,569</td>
                                            <td>340</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainContent;
