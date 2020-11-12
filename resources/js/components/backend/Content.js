import React from "react";
import MainContent from "./dashboard/MainContent";
import Products from "./product/Index";
import Order from "./order/Index";
import Pages from "./pages/Index";
import Discount from "./discount/Index";
import Store from "./store/Index";
import Profile from "./profile/Index";
import Traffic from "./traffic/Index";
import { Switch, Route } from "react-router-dom";
class Content extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Switch>
                <Route path="/admin/product">
                    <Products />
                </Route>
                <Route path="/admin/order">
                    <Order />
                </Route>
                <Route path="/admin/pages">
                    <Pages />
                </Route>
                <Route path="/admin/discount">
                    <Discount />
                </Route>
                <Route path="/admin/store">
                    <Store />
                </Route>
                <Route path="/admin/profile">
                    <Profile />
                </Route>
                <Route path="/admin/traffic">
                    <Traffic />
                </Route>
                <Route exact path="/admin/">
                    <MainContent />
                </Route>
            </Switch>
        );
    }
}

export default Content;
