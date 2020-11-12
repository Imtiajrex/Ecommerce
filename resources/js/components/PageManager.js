import React from "react";
import Admin from "./backend/Admin";
import { Switch, Route } from "react-router-dom";
import Front from "./frontend/Index";
class PageManager extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/">
                    <Front />
                </Route>
            </Switch>
        );
    }
}

export default PageManager;
