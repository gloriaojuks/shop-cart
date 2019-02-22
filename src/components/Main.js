import React, { Component } from 'react'
import Products from "./Products.js"
// import iphone from './iphone.png';  


class Total extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 1,
      // created state variable to hold price
      // price: parseInt(props.price, 10)
    };

  }
  render() {
    return   <div><h2>Total Cost: {this.state.total} </h2></div>;
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
          marginTop: "20px",
          color: "#fff",
          marginBottom: "20px"
      }}>
        <Products imgUrl="http://www.stickpng.com/assets/images/58adef91e612507e27bd3c2b.png"  name="andriod" price={123} className="product"/>
        <Products imgUrl="https://www.rogers.com/cms/rogers/page-specific/wireless/lgg7/images/sub-banner-phones.png" name="iphone" price={600} className="product"/>
        <Products imgUrl="http://pngies.com/wp-content/uploads/edd/2017/02/Android1.png" name="nokia" price={300} className="product"/>
        <Products imgUrl="https://www.croma.com/medias/-1200Wx1200H-212968-515Wx515H?context=bWFzdGVyfGltYWdlc3w2OTYwNnxpbWFnZS9wbmd8aW1hZ2VzL2g0Yi9oZTMvODgwMTY2NjMzNDc1MC5wbmd8Zjg2MzhjZmE4MWM0NTBlZTYxNTg5MTcxNTU2NzY0YmQ0YmEyYWZhZTgyMTk3MjlhNzgwZDMxMTA2ZjM1NWFlMg" name="lenovo" price={900} className="product"/>
        <Total />
      </div>

    )
  }
}

export default App
