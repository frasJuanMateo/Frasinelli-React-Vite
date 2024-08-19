import { useState, useEffect } from 'react'
import '../App.css'

function NavBar() {
  return (
    <ul style={{listStyle: "none",margin: "0",padding: "0"}}>
        <li style={{float: "left", margin: "20px"}}><a href=''>Home</a></li>
        <li style={{float: "left", margin: "20px"}}><a href=''>News</a></li>
        <li style={{float: "left", margin: "20px"}}><a href=''>Contact</a></li>
        <li style={{float: "left", margin: "20px"}}><a href=''>About</a></li>
    </ul>
  )
}

export default NavBar
