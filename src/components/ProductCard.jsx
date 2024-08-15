import { useState, useEffect } from 'react'
import '../App.css'

function ProductCard(product) {
  const [productData, setProductData] = useState(product.product);
  return (
      <div key={productData.id} style={{maxWidth:"300px", margin:"20px"}}>
        <h4 style={{margin:"-5px"}}>• {productData.title}</h4>
        <p style={{margin:"-5px"}}>{productData.category}</p>
        <p style={{margin:"-5px"}}>${productData.price}</p>
      </div>
  )
}

export default ProductCard
