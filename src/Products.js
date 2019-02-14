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
      <div>
        <p className="contain">{this.props.name}- ${this.props.price}</p>
        
        {/* <hr /> */}

        <button
          style={{
            backgroundColor: "tomato",
            color: "#464e54",
            borderRadius: "5px",
            width: "100px",
            height: "50px",
            fontWeight: "800",
            fontSize: "13px"
          }}
          onClick={this.buy.bind(this)}
          className="contain"
        >
          Add to Cart
        </button>
        <h3 className="contain">qty: {this.state.qty} item(s)</h3>
        <p style={{textAlign: "right"}}>Enjoy your shoping</p>
        <hr/>
      </div>
    );
  }
}

export default Products;
