import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header style={headerStyle}>
      {/* <h1>Shopping <span style={{color: "#ccc", fontSize: "50px", textDecoration: "underline"}}>Area</span> | <span style={{color: "#ccc"}}>About Us</span></h1>
     */}
     <ul className="list">
       {/* <span><i className="fas fa-home" /></span> */}
       <Link style={{color: "white"}} to ="/"><li>home </li> </Link> 
       <Link style={{color: "white"}} to = "/about"><li>about </li></Link>
       <Link style={{color: "white"}} to = "/contact"><li>contact </li></Link>
     </ul>
      </header>
    </div>
  )
}

const headerStyle = {
    background: "#464e54",
    color: "white",
    textAlign: "center",
    padding: "10px",
    margin: "0 auto",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "85%",
}