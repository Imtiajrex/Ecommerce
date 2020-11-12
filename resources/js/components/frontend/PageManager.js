import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Index";
import Bag from "./bag/Index";
import Checkout from "./checkout/Index";
import Product from "./products/Index";
class PageManager extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/bag">
                    <Bag />
                </Route>
                <Route exact path="/Checkout">
                    <Checkout />
                </Route>
                <Route exact path="/Product">
                    <Product />
                </Route>
            </Switch>
        );
    }
}

export default PageManager;
