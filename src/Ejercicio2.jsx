import { useState, useEffect } from 'react'
import './App.css'

function Ejercicio2() {
    const [products, setProducts] = useState([{id: 0, title:"", price:""}]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(json => setProducts(json))
    }, []);

  return (
    <>
        <h3>Lista de Productos:</h3>
        <ul>{products.map((product) => <li key={product.id}>{product.title} ${product.price}</li>)}</ul>
    </>
  )
}

export default Ejercicio2
