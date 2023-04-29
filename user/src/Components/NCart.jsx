import React, { useState } from 'react';
import axios from 'axios';

const NCart = () => {
  const [nombre, setNombre] = useState('');
  const [submitCount, setSubmitCount] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/nuevo_carrito/' + nombre)
    .then((res) => {return res.data})
    .then((data) => {window.location.href = "/"+data})
    .catch(error => {console.log(error);});
    setSubmitCount(submitCount + 1); 
  };
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <button type="submit" onClick={handleSubmit}>Crear</button>
    </form>
  );
};

export default NCart;
