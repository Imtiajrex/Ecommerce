import React from "react";
import Delete from "./Delete";
import Add from "./Add";
import Edit from "./Edit";
class List extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="tab-pane fade show active"
                    id="admin"
                    role="tabpanel"
                    aria-labelledby="admin-tab"
                >
                    <div className="table-responsive bg-default">
                        <div>
                            <div className="p-3 pl-md-5">
                                <h1 style={{ color: "#4d7bca" }}>
                                    Admin Users List
                                </h1>
                                <a
                                    className="btn btn-secondary"
                                    data-toggle="modal"
                                    data-target="#add"
                                >
                                    <i className="fas fa-plus"></i> Add New
                                    Admin User
                                </a>
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
                                        <th scope="col">Admin Full Name</th>
                                        <th scope="col">Admin User Name</th>
                                        <th scope="col">Admin Password</th>
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
                                                    Rakib Hossain
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    rakib
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    **********
                                                </div>
                                            </div>
                                        </th>
                                        <td className="text-left text-info">
                                            <a
                                                href="#edit"
                                                className="text-center text-info"
                                                data-toggle="modal"
                                                data-target="#edit"
                                            >
                                                <i className="fas fa-pen"></i>
                                            </a>
                                        </td>
                                        <td className="text-left text-red">
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
                </div>
                <Delete />
                <Add />
                <Edit />
            </>
        );
    }
}

export default List;
