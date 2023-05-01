import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Table.css";

function Table() {
    const [data, setData] = useState(null);
    const path = window.location.pathname;
    useEffect(() => {
        fetch("/sushi").then(res => res.json()).then((data) => setData(data)).catch((err) => console.log(err));}, [data]);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/addSushi/' + event.target.getAttribute("sushi_id")+ "/" + path)
            .catch(error => {
            console.log(error);});
        };
    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete('/sushi/' + event.target.getAttribute("sushi_id"))
            .catch(error => {console.log(error);});
        };
    return (
        <>
        {data ? data.map((dato) => {
                return (
                    <div>
                    <h1>{dato.nombre}</h1>
                    <div style={{display: "flex",justifyContent: "center"}}>
                      <button className= "botonEstilo1" type="submit" onClick={handleSubmit} sushi_id={dato.sushi_id}>Agregar</button>
                      <button className= "botonEstilo1" type="submit" onClick={handleDelete} sushi_id={dato.sushi_id}>Eliminar</button>
                    </div>
                    </div>
                );
            })
            : "...Loading"}
        </>
    );
}

export default Table;

