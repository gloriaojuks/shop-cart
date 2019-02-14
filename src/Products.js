import React, { Component } from "react";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 0
    };
  }

  buy() {
    this.setState({ qty: this.state.qty + 1 });
  }

  render() {
    return (
      <div style={{padding: 40, margin: "0 auto", background: "#ccc", width: "100%", maxWidth: "80%", marginTop: "50px" }}>
        <p className="contain">Andriod - $199</p>
        <hr />
        <button
          style={{ backgroundColor: "#f4f4f4", color: "orange", borderRadius: "5px" }} onClick={this.buy.bind(this)} className="contain">
          Add to Cart
        </button>
        <hr />
        <h3 className="contain">qty: {this.state.qty} item(s)</h3>
      </div>
    );
  }
}

export default Products;
