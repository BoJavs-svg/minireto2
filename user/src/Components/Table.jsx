import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Table.css";

function Table() {
    const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        fetch("/sushi")
            .then(res => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        }, []);      
    //proxy localhost:3001
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/addSushi/' + event.target.getAttribute("sushi_id"))
        .then(response => {})
        .catch(error => {
          console.log(error);
          // handle errors if needed
        });
    };

    return (
        <>
        {data
            ? data.map((dato) => {
                return (
                <div className="dropdown-container" onClick={toggleDropdown}>
                    <h1>{dato.nombre}</h1>
                    <div className="toggle-dropdown">Toggle Options</div>
                    {isOpen && (
                        <div className="dropdown-contents">

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
                            <button type="submit" onClick={handleSubmit} sushi_id={dato.sushi_id}>Agregar</button>

                        </div>
                    )}
                </div>
                );
            })
            : "...Loading"}
        </>
    );
}

export default Table;

