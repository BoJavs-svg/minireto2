import React from 'react';

function NSushi(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.nombre.value);
            // /sushi/:nombre
        fetch('/sushi/'+ event.target.nombre.value, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                arroz: event.target.arroz.value,
                alga_nori: event.target.alga_nori.value,
                kombu: event.target.kombu.value,
                salmon: event.target.salmon.value,
                atun: event.target.atun.value,
                aguacate: event.target.aguacate.value,
                pepino: event.target.pepino.value,
                wasabi: event.target.wasabi.value
            })
        })  
        .then(res => console.log(res))
        .catch(err => {console.log(err);});
    };
    return (
        <div>
            <h1>Sushi Personalizado</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" />
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

                <button type="submit" className='myButton'>Agregar</button>
            </form>
        </div>
    );
}

export default NSushi;
