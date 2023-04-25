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
    const deleteCarrito = (sushi_id, carrito_id) => {
        fetch("/deleteSushi/" + carrito_id + "/" + sushi_id, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    };    
    
    return (
        <>
        {data ? data.map((dato) => {
                return (
                    <div>
                        <h3>{dato.nombre}</h3>
                        <button onClick={() => {deleteCarrito(dato.sushi_id, dato.carrito_id)}}>Eliminar</button>
                    </div>
                );
            })
            : "...Loading"}
        </>
    );
    }


export default Carrito;

