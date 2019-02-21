import React from "react"
import ReactDOM from "react-dom";
import App from "./App.js";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'


let destination = document.querySelector("#root");

ReactDOM.render(
    <div>
        <App/>
    </div>,
    destination
)