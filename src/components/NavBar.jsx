import { useState, useEffect } from 'react'
import '../App.css'

function NavBar() {
  return (
    <ul style={{listStyle: "none",margin: "0",padding: "0"}}>
        <li style={{float: "left", margin: "20px"}}><a>Home</a></li>
        <li style={{float: "left", margin: "20px"}}><a>News</a></li>
        <li style={{float: "left", margin: "20px"}}><a>Contact</a></li>
        <li style={{float: "left", margin: "20px"}}><a>About</a></li>
    </ul>
  )
}

export default NavBar
