import { useState, useEffect } from 'react'
import '../App.css'

function NavBar() {
  return (
    <ul key={productData.id} style={{listStyle: "none",margin: "0",padding: "0"}}>
        <li><a>Home</a></li>
        <li><a>News</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
    </ul>
  )
}

export default NavBar
