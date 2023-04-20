import React, { useEffect, useState } from "react";


function Carrito() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/carrito")
            .then(res => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        }, [data]);
        return (
            <>
            {data
                ? data.map((dato) => {
                    return (
                        <div>
                            <h3>{dato.nombre} x {dato.cantidad}</h3>
                        </div>
                    );
                })
                : "...Loading"}
            </>
        );
    }


export default Carrito;

