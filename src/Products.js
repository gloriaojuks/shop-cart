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

  remove() {
    if(this.state.qty < 1){
    this.setState({qty: 0})
    }else{
    this.setState({ qty: this.state.qty - 1 });
  }
}
  render() {
    return (
      <div>
        <img height="100" width="100" src={this.props.imgUrl} alt=""/>
        <p className="contain">{this.props.name}- ${this.props.price}</p>

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
          onClick={this.buy.bind(this)}
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
          onClick={this.remove.bind(this)}
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
