import React from "react";
import { Route, Switch } from "react-router-dom";
import List from "./List";
class Order extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/admin/order">
                        <List />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default Order;
