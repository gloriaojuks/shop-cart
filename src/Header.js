import React from 'react'

export default function Header() {
  return (
    <div>
        <header style={headerStyle}>
      {/* <h1>Shopping <span style={{color: "#ccc", fontSize: "50px", textDecoration: "underline"}}>Area</span> | <span style={{color: "#ccc"}}>About Us</span></h1>
     */}
     <ul className="list">
       <span><i className="fas fa-home" /></span>
       <li>home </li>  
       <li>about </li>
       <li>contact </li>
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
    margin: "40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "85%",
}