import React, { useState } from 'react';
import axios from 'axios';

const NCart = () => {
  const [nombre, setNombre] = useState('');
  const [submitCount, setSubmitCount] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/nuevo_carrito/' + nombre)
    .catch(error => {console.log(error);});
    setSubmitCount(submitCount + 1); 

    axios.get('/lastCarrito')
    .then((res) => res.data)
    .then((data) => {
        window.location.href = "/" + data[0].carrito_id;
    })
    .catch((err) => console.log(err));
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
