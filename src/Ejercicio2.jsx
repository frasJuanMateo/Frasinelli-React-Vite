import { useState, useEffect } from 'react'
import './App.css'
import loadingIcon from "./assets/loading-image.gif"

function Ejercicio2() {
    const [loadingFlag, setLoadingFlag] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          else {
            return response.json()
          }
        })
        .then(json => setProducts(json))
        .then(() => setLoadingFlag(false))
        .catch(error => {
          console.error('Error fetching data:', error);
          });
    }, []);

  return (
    <>
      {loadingFlag && <img src={loadingIcon} style={{width: "90px", height: "90px"}}></img>}
      {!loadingFlag &&
      <>
        <h3>Lista de Productos:</h3>
        <ul>{products.map((product) => <li key={product.id}>{product.title} ${product.price}</li>)}</ul>
      </>
      }
    </>
  )
}

export default Ejercicio2
