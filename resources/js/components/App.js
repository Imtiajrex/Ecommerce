import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PageManager from "./PageManager";
import "./styles/style.css";
class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        $("#summernote").summernote({
            height: 250,
            placeholder: "Type Here"
        });
    }
    render() {
        return (
            <div>
                <Router>
                    <PageManager />
                </Router>
            </div>
        );
    }
}

export default App;

if (document.getElementById("app")) {
    //const assetPath = document.getElementById("app").getAttribute("assetPath");
    ReactDOM.render(<App />, document.getElementById("app"));
}
