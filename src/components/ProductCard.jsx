import { useState, useEffect } from 'react'
import '../App.css'

function ProductCard({id, title, category, price}) {
  return (
      <div key={id} style={{maxWidth:"300px", margin:"20px"}}>
        <h4 style={{margin:"-5px"}}>• {title}</h4>
        <p style={{margin:"-5px"}}>{category}</p>
        <p style={{margin:"-5px"}}>${price}</p>
      </div>
  )
}

export default ProductCard
