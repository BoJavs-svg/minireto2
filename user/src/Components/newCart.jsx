import React, { useState } from 'react';
import axios from 'axios';


const NewCart = () => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/nuevo_carrito/' + nombre)
    .then(response => {})
    .catch(error => {
      console.log(error);
      // handle errors if needed
    });
    //Add the user id 
    fetch("/lastCarrito")
    .then(res => res.json())
    .then((data) => {
      console.log("id",data);
      // do something with the response if needed
    })
      
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del carrito:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <button type="submit" onClick={handleSubmit}>Crear</button>
    </form>
  );
};

export default NewCart;
