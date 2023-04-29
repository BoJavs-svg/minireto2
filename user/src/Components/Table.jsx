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
    // app.delete('/sushi/:sushi_id', (req, res) => {
    //     con.query("DELETE FROM SUSHI WHERE sushi_id = ?", [req.params.sushi_id], (err, rows) => {
    //         if (err) throw err;
    //         res.send(rows);
    //     });
    // });
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
                    <div className="container">
                        <div className="column">
                            
                        {/* <ul> */}
                            {/* <li>Arroz</li>
                            <li>Alga Nori </li>
                            <li>Kombu </li>
                            <li>Salmon </li> */}
                        {/* </ul> */}
                        </div>
                        <div className="column">
                        {/* <ul> */}
                            {/* <li>Atun </li>
                            <li>Aguacate </li>
                            <li>Pepino </li>
                            <li>Wasabi </li> */}
                        {/* </ul> */}
                        </div>
                    </div>
                    <div style={{display: "flex",justifyContent: "space-around"}}>
                      <button type="submit" onClick={handleSubmit} sushi_id={dato.sushi_id}>Agregar</button>
                      <button type="submit" onClick={handleDelete} sushi_id={dato.sushi_id}>
                        Eliminar
                      </button>
                    </div>
                    </div>
                );
            })
            : "...Loading"}
        </>
    );
}

export default Table;

