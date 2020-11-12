import React from "react";
import Delete from "./Delete";
import Add from "./CategoryAdd";
import Edit from "./CategoryEdit";
class CategoryList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="tab-pane fade show active"
                    id="category"
                    role="tabpanel"
                    aria-labelledby="category-tab"
                >
                    <div className="table-responsive bg-default">
                        <div>
                            <div className="p-3 pl-md-5">
                                <h1 style={{ color: "#4d7bca" }}>
                                    Category Listing
                                </h1>
                                <a
                                    className="btn btn-secondary"
                                    data-toggle="modal"
                                    data-target="#cat_add"
                                >
                                    <i className="fas fa-plus"></i> Add New
                                    Category
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
                                        <th
                                            scope="col"
                                            className="sort"
                                            data-sort="budget"
                                        >
                                            Category Name
                                        </th>
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
                                                        Mens
                                                    </span>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="text-left text-info">
                                            <a
                                                href="#edit"
                                                className="text-center text-info"
                                                data-toggle="modal"
                                                data-target="#cat_edit"
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

export default CategoryList;
