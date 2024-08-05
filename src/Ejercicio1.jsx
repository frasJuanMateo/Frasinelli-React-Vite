import { useState, useEffect } from 'react'
import './App.css'

function Ejercicio1() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const onClick = (event) => {
    event.preventDefault();
    console.log(formData);
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
