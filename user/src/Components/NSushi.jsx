import React, { useState } from 'react';

function NSushi(){
    return (
        <div>
            <h1>Sushi Personalizado</h1>
            {/*Input de nombre del nuevo sushi*/}
            <input type="text" placeholder="Nombre del sushi" id="nombre"/>
            {/*Menu dropdown de valor para cada ingredientes*/}
            <div className="container">
                <div className="column">
                    <ul>
                        <li>Arroz:</li>
                        <select name="arroz" id="arroz">
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select>
                        <li>Alga Nori: </li>
                        <select name="alga_nori" id="alga_nori">
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select>
                        <li>Kombu: </li>
                        <select name="kombu" id="kombu">
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select>
                        <li>Salmon: </li>
                        <select name="salmon" id="salmon">
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select>
                    </ul>
            </div>
            <div className="column">
                <ul>
                    <li>Atun: </li>
                    <select name="atun" id="atun">
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                    <li>Aguacate: </li>
                    <select name="aguacate" id="aguacate">
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                    <li>Pepino: </li>
                    <select name="pepino" id="pepino">
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                    <li>Wasabi: </li>
                    <select name="wasabi" id="wasabi">
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default NSushi;
