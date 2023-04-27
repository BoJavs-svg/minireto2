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
        // app.delete('/deleteSushi/:cSushi_id', (req, res) => {
        //     con.query("DELETE FROM CARRITO_SUSHI WHERE carrito_sushi_id = ?", [req.params.cSushi_id], (err, rows) => { 
        //         if (err) throw err;
        //         res.send(rows);
        //     });
        // });
    const deleteCarrito = (carrito_sushi_id) => {
        fetch("/deleteSushi/" + carrito_sushi_id, {
            method: "DELETE",
        }).catch((err) => console.log(err));
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

