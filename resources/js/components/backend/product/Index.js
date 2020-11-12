import React from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
class Products extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Route path="/admin/product/add">
                    <Add />
                </Route>
                <Route path="/admin/product/edit">
                    <Edit />
                </Route>
                <Route exact path="/admin/product">
                    <List />
                </Route>
            </>
        );
    }
}

export default Products;
