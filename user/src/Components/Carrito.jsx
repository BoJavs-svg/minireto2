import React, { useEffect, useState } from "react";

function Carrito() {
    const [data, setData] = useState(null);
    const path = window.location.pathname;
    useEffect(() => {
        fetch("/carrito" + path)
            .then(res => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        }, [data]);
    const deleteCarrito = (carrito_sushi_id){
        fetch ("/deleteSushi/" + carrito_sushi_id, {}
        )
        .catch((err) => console.log(err));
    };  
    return (
        <>
        {data ? data.map((dato) => {
                return (
                    <div>
                        <h3>{dato.nombre}</h3>
                        <button onClick={() => {deleteCarrito(dato.carrito_sushi_id)}}>Eliminar</button>
                    </div>
                );
            }) : "No hay carrito"}
        </>
    );
}


export default Carrito;

