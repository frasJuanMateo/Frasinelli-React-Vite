import { useState, useEffect } from 'react'
import './App.css'

function Ejercicio1() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const handleChange = (event) => {
    const { name, value } = event.target;
    //Chequea, en el caso de que se cambie el nombre, de que...
    //no empieze con un numero o contenga un caracter especial.
    if (!(name == "name" && (/[^A-Za-z0-9]/.test(value)) || /^\d/.test(value))) {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const onClick = (event) => {
    event.preventDefault();
    if (formData.name == "" || formData.email == "") {
      console.log("No se inserto un nombre de usuario o email.")
    }
    else {
      console.log(formData);
    }
  }
  return (
    <>
      <form onSubmit={onClick}>
        <label htmlFor="">Inserte Nombre de Usuario:</label> <br />
        <input type="text" name="name" onChange={handleChange} value={formData.name} /><br />
        <label htmlFor="">Inserte Email de Usuario:</label><br />
        <input type="email" name="email" onChange={handleChange} value={formData.email} /><br />
        <button type="submit">Subir Datos</button>
      </form>
    </>
  )
}

export default Ejercicio1
