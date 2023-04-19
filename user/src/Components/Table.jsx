import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Table.css";

function Table() {
    const [data, setData] = useState(null);
    const addToCart = (event) => {
        event.preventDefault();
        const sushi_id = event.target.value;
        axios.post(`/addSushi/${sushi_id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }        
    useEffect(() => {
        fetch("/sushi")
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

                    <h1>{dato.nombre}</h1>
                    <div className="container">
                        <div className="column">
                        <ul>
                            <li>Arroz:</li>
                            <input type="checkbox" name="arroz" id="arroz" checked={dato.arroz} />
                            <li>Alga Nori: </li>
                            <input type="checkbox" name="alga_nori" id="alga_nori" checked={dato.alga_nori} />
                            <li>Kombu: </li>
                            <input type="checkbox" name="kombu" id="kombu" checked={dato.kombu} />
                            <li>Salmon: </li>
                            <input type="checkbox" name="salmon" id="salmon" checked={dato.salmon} />
                        </ul>
                        </div>
                        <div className="column">
                        <ul>
                            <li>Atun: </li>
                            <input type="checkbox" name="atun" id="atun" checked={dato.atun} />
                            <li>Aguacate: </li>
                            <input type="checkbox" name="aguacate" id="aguacate" checked={dato.aguacate} />
                            <li>Pepino: </li>
                            <input type="checkbox" name="pepino" id="pepino" checked={dato.pepino} />
                            <li>Wasabi: </li>
                            <input type="checkbox" name="wasabi" id="wasabi" checked={dato.wasabi} />
                        </ul>
                        </div>
                    </div>
                        <button id={dato.sushi_id} onClick={addToCart}>Add to cart</button>
                    </div>
                );
            })
            : "...Loading"}
        </>
    );
}

export default Table;

