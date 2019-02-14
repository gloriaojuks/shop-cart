import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import Header from "./Header.js"
import "./style.css"


let destination = document.querySelector("#root");

ReactDOM.render(
    <div>
        <Header />
        <App />
    </div>,
    destination
)