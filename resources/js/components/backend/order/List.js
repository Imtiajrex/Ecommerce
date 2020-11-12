import React from "react";
import { NavLink } from "react-router-dom";
import View from "./View";
import Delete from "./Delete";
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
                            <h1 style={{ color: "#4d7bca" }}>Orders Listing</h1>
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
                                        Customer Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="sort"
                                        data-sort="budget"
                                    >
                                        Item ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="sort"
                                        data-sort="status"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="sort"
                                        data-sort="status"
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
                                    <th scope="col">Change Status</th>
                                    <th scope="col">View</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                <tr>
                                    <th scope="row">1</th>
                                    <th>
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <span className="name mb-0 text-sm">
                                                    Roger Smith
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="budget">Hoodie</td>
                                    <td>3</td>
                                    <td>3000 ৳</td>
                                    <td>
                                        <span className="badge badge-dot mr-4">
                                            <i className="bg-warning"></i>
                                            <span className="status">
                                                Delivering
                                            </span>
                                        </span>
                                    </td>
                                    <td className="text-center">
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
                                                    Pending
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Production
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delivering
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Completed
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Returned
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Refunded
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Cancelled
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center text-success">
                                        <a
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#viewModal"
                                            className="text-center text-success"
                                        >
                                            <i className="fas fa-eye"></i>
                                        </a>
                                    </td>
                                    <td className="text-center text-info">
                                        <NavLink
                                            to="/admin/order/edit/1"
                                            className="text-center text-info"
                                        >
                                            <i className="fas fa-pen"></i>
                                        </NavLink>
                                    </td>
                                    <td className="text-center text-red">
                                        <a
                                            href="#"
                                            className="text-center text-red"
                                            data-toggle="modal"
                                            data-target="#deleteConfirmationModal"
                                        >
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Delete />
                <View />
            </>
        );
    }
}

export default List;
