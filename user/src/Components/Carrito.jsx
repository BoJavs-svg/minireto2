import React, { useEffect, useState } from "react";
import newCart from "../Components/newCart";


function Carrito() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/carrito/?",1)
            .then(res => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        }, []);    
    return (
        <>
        {data
            ? data.map((dato) => {
                return (
                    <div>
                        <ul>
                            <li>{dato.nombre}</li>
                        </ul>
                    </div>
                );
            })
            : <newCart/>}
        </>
    );
}

export default Carrito;

