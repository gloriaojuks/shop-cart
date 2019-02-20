import React, { Component } from "react";


export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 1,
      // created state variable to hold price
      price: parseInt(props.price, 10)
    };
  }

  // function to update the price
  updatePrice() {
    // this.setState({ price: this.state.price * this.state.qty });
    this.setState({ price: this.state.qty * parseInt(this.props.price, 10) });
  }

  // renamed buy to increaseQuantity
  increaseQuantity() {
    this.setState({ qty: this.state.qty + 1 }, () => {
      this.updatePrice();
    });
  }

  // renamed remove to decreaseQuantity
  decreaseQuantity() {
    if (this.state.qty < 2) {
      this.setState({qty: 1})
    } else {
      this.setState({ qty: this.state.qty - 1 }, () => {
        this.updatePrice();
      });
    }
  }
  render() {
    return (
      <div>
        <img height="100" width="100" src={this.props.imgUrl} alt=""/>
        <p className="contain">{this.props.name} - ${this.state.price}{/* used local state instead of props */}</p>

        {/* <hr /> */}
        <p>(Add to Cart)</p>
        <button
          style={{
            backgroundColor: "tomato",
            color: "#fff",
            borderRadius: "5px",
            width: "30px",
            height: "30px",
            fontWeight: "800",
            fontSize: "13px",
            margin: "2px"

          }}
          onClick={this.increaseQuantity.bind(this)}
          className="contain"
        >
          +
        </button>

        <button
          style={{
            backgroundColor: "tomato",
            color: "#fff",
            borderRadius: "5px",
            width: "30px",
            height: "30px",
            fontWeight: "800",
            fontSize: "13px",
            margin: "2px"
          }}
          onClick={this.decreaseQuantity.bind(this)}
          className="contain"
        >
          -
        </button>
        <h3 className="contain">qty: {this.state.qty} item(s)</h3>
        <p style={{textAlign: "right", color: "#f4f4f4",marginTop: "-20px"}}>Enjoy your shoping</p>
        <hr/>
      </div>
    );
  }
}

export default Products;
