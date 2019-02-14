import React from 'react'

export default function Header() {
  return (
    <div>
        <header style={headerStyle}>
      <h1>Shopping <span style={{color: "white", fontSize: "50px"}}>Area</span></h1>
      </header>
    </div>
  )
}

const headerStyle = {
    background: "#464e54",
    color: "tomato",
    textAlign: "center",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "85%",
    margin: "0 auto",

}