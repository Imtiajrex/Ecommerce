import React from "react";
import { Link } from "react-router-dom";
class List extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="table-responsive bg-default">
                    <div>
                        <div className="p-3 pl-md-5">
                            <h1 style={{ color: "#4d7bca" }}>
                                Products Listing
                            </h1>

                            <Link
                                className="btn btn-secondary"
                                to="/admin/product/add"
                            >
                                <i className="fas fa-plus"></i> Add New Product
                            </Link>
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
                                    <th
                                        scope="col"
                                        className="sort"
                                        data-sort="budget"
                                    >
                                        Product Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="sort"
                                        data-sort="budget"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="sort"
                                        data-sort="status"
                                    >
                                        Status
                                    </th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                <tr>
                                    <th scope="row">1</th>
                                    <th>
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <span className="name mb-0 text-sm">
                                                    Argon Design System
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="budget">2500 ৳</td>
                                    <td>
                                        <span className="badge badge-dot mr-4">
                                            <i className="bg-warning"></i>
                                            <span className="status">
                                                Inactive
                                            </span>
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown">
                                            <a
                                                className="btn btn-sm btn-icon-only text-light"
                                                href="#"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Deactivate
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default List;
