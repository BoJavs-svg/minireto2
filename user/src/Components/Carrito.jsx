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
    const deleteCarrito = (carrito_sushi_id) => {
        fetch("/deleteSushi/" + carrito_sushi_id, {
            method: "DELETE",
        }).catch((err) => console.log(err));
    };
        return (
        <>
        {data ? data.map((dato) => {
            if(data.length === 0){
                return (
                    <div>
                        <h3>Carrito vacio</h3>
                    </div>
                );
            }else{
                return (
                    <div>
                        <h3>{dato.nombre}</h3>
                        <button className="botonEstilo2" onClick={() => {deleteCarrito(dato.carrito_sushi_id)}}>Eliminar</button>
                    </div>
                );
                }
            }) : "No hay carrito"}
        </>
    );
}


export default Carrito;

