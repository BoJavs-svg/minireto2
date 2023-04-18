import React, { useEffect, useState } from "react";

function Table() {
    const [data, setData] = useState(null);
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
                        <ul>
                            <li>Arroz: {dato.arroz}</li>
                            <input type="checkbox" name="arroz" id="arroz" checked={dato.arroz} />
                            <li>Alga Nori: {dato.alga_nori}</li>
                            <input type="checkbox" name="alga_nori" id="alga_nori" checked={dato.alga_nori} />
                            <li>Kombu: {dato.kombu}</li>
                            <input type="checkbox" name="kombu" id="kombu" checked={dato.kombu} />
                            <li>Salmon: {dato.salmon}</li>
                            <input type="checkbox" name="salmon" id="salmon" checked={dato.salmon} />
                            <li>Atun: {dato.atun}</li>
                            <input type="checkbox" name="atun" id="atun" checked={dato.atun} />
                            <li>Aguacate: {dato.aguacate}</li>
                            <input type="checkbox" name="aguacate" id="aguacate" checked={dato.aguacate} />
                            <li>Pepino: {dato.pepino}</li>
                            <input type="checkbox" name="pepino" id="pepino" checked={dato.pepino} />
                            <li>Wasabi: {dato.wasabi}</li>
                            <input type="checkbox" name="wasabi" id="wasabi" checked={dato.wasabi} />
                        </ul>
                    </div>
                );
            })
            : "...Loading"}
        </>
    );
}

export default Table;

