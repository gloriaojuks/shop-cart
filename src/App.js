import React, { Component } from 'react'
import Products from "./Products.js"


class Total extends React.Component {
  render() {
    return <div><h1>Total Cost:</h1></div>;
  }
}


export class App extends Component {
  render() {
    return (
      <div style={{ padding: 40,
          borderRadius: "50px",
          margin: "0 auto",
          background: "#464e54",
          width: "100%",
          maxWidth: "80%",
          // marginTop: "50px",
          color: "#fff"
      }}>
        <Products name="andriod" price="123" className="product"/>
        <Products name="iphone" price="600" className="product"/>
        <Products name="nokia" price="300" className="product"/>
        <Products name="lenovo" price="900" className="product"/>
        <Total />
      </div>
    )
  }
}

export default App
