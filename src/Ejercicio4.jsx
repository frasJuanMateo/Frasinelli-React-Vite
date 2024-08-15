import { useState, useEffect } from 'react'
import './App.css'
import loadingIcon from "./assets/loading-image.gif"
import NavBar from './components/NavBar.jsx'
import ProductCard from './components/ProductCard.jsx'

function Ejercicio3() {
    const [loadingFlag, setLoadingFlag] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([  ]);
    const onChange = (event) => {
      if (event.target.name == "search") {setSearch(event.target.value);}
      if (event.target.name == "category") {
        if(event.target.value == "all") {setFilteredList(products);}
        else {setFilteredList(products.filter(product => product.category == event.target.value));}
      }
    } 
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
        .then((json) => {
          setProducts(json);
          setFilteredList(json);
          setLoadingFlag(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          })
    }, []);

    useEffect(() => {
      let array = ["all", ...products.map(product => product.category)];
      array = array.filter((val, id, array) => {
        return array.indexOf(val) == id;  
     });
     setCategories(array)
  }, [products]);
    

  return (
    <>
    
      {loadingFlag && <img src={loadingIcon} style={{width: "90px", height: "90px"}}></img>}
      {!loadingFlag &&
      <>
        
        <input type="text" name='search' onChange={onChange}/><br />
        <select name="category" onChange={onChange}>
          {categories.map((category, index) => <option key={index}>{category}</option>)}
        </select>

        <h3>Lista de Productos:</h3>
        {filteredList.filter(product => search == "" ? true : product.title.toLowerCase().startsWith(search)).map(product => <ProductCard product={product}/>)}
      </>
      }
    </>
  )
}

export default Ejercicio3
