import React, { useEffect, useState } from "react";


function Carrito() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/carrito")
            .then(res => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        }, []);
    if(data.length <= 0){
        return (
            <div>
                <p>Carrito vacio</p>
            </div>
        )
    }
    else{
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
            : "...Loading"}
        </>
    );
    }
}

export default Carrito;

