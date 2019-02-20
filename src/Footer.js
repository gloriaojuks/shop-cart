import React from 'react'

export default function Footerr() {
  return (
    <div>
        <header style={FooterStyle}>
      <h1>&copy; Copyright 2019 Ojukwu Gloria</h1>
      </header>
    </div>
  )
}

const FooterStyle = {
    background: "#464e54",
    color: "#ccc",
    textAlign: "center",
    padding: "10px",
    margin: "40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "85%",
}