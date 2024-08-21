import { useState, useEffect } from 'react'
import './App.css'
import loadingIcon from "./assets/loading-image.gif"
import NavBar from './components/NavBar.jsx'
import ProductCardFav from './components/ProductCardFav.jsx'

function Ejercicio5() {
    const [loadingFlag, setLoadingFlag] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [favoriteList, setFavoriteList] = useState([]);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([  ]);
    const onChange = (event) => {
      if (event.target.name == "search") {setSearch(event.target.value);}
      if (event.target.name == "category") {
        if(event.target.value == "all") {setFilteredList(products);}
        if(event.target.value == "favorites") {setFilteredList(favoriteList);}
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
      let array = ["all", "favorites", ...products.map(product => product.category)];
      array = array.filter((val, id, array) => {
        return array.indexOf(val) == id;  
     });
     setCategories(array)
  }, [products]);
    console.log(favoriteList);
    return (
    <>
    
      {loadingFlag && <img src={loadingIcon} style={{width: "90px", height: "90px"}}></img>}
      {!loadingFlag &&
      <>
        <NavBar />
        <input type="text" name='search' onChange={onChange}/><br />
        <select name="category" onChange={onChange}>
          {categories.map((category, index) => <option key={index}>{category}</option>)}
        </select>

        <h3>Lista de Productos:</h3>
        
        <ul>{filteredList.filter(product => search == "" ? true : product.title.toLowerCase().startsWith(search)).map(item => <ProductCardFav item={item} id={item.id} title={item.title} category={item.category} price={item.price} favoriteList={favoriteList} setFavoriteList={setFavoriteList}/>)}</ul>
      </>
      }
    </>
  )
}

export default Ejercicio5
