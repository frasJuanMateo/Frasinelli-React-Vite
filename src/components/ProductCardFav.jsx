import { useState, useEffect } from 'react'
import '../App.css'

function ProductCardFav({item, id, title, category, price, favoriteList, setFavoriteList}) {
  return (
      <div key={id} style={{maxWidth:"300px", margin:"20px"}}>
        <h4 style={{margin:"-5px"}}>• {title}</h4>
        <p style={{margin:"-5px"}}>{category}</p>
        <p style={{margin:"-5px"}}>${price}</p>
        {!(favoriteList.indexOf(item) > - 1) && <button onClick={() => {setFavoriteList([...favoriteList, item])}}>☆</button>}
        {(favoriteList.indexOf(item) > - 1) && <button onClick={() => {setFavoriteList(favoriteList.filter(product => product.title != item.title))}}>★</button>}
        
      </div>
  )
}

export default ProductCardFav
