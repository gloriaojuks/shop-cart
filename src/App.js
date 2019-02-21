import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import About from "./components/pages/About"

export class App extends Component {
  render() {
    return (
        <Router>
      <div>
      <Header />
          <Route exact path="/" render={props => (
              <React.Fragment>
                    <Main />
                    <Footer />
              </React.Fragment>
          )} />
          <Route path="/about" component={About} />
      </div>
      </Router>
    )
  }
}

export default App
