import React, { Component } from 'react'


export class Products extends Component {
      
    constructor(props){
        super(props)

       this.state = {
            qty : 0
        };
    }

    buy(){
        this.setState({qty: this.state.qty + 1})
    }

  render(){
    return (
      <div>
          <p>Andriod - $199</p>
          <button onClick={this.buy.bind(this)}>Buy</button>
          <h3>qty: {this.state.qty} item(s)</h3>
      </div>
    )
  } 
}

export default Products
