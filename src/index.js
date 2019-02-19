import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import "./style.css"


let destination = document.querySelector("#root");

ReactDOM.render(
    <div>
        <Header />
        <Main />
        <Footer />
    </div>,
    destination
)