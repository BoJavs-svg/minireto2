import React, { useEffect, useState } from "react";

function newCart() {
    return (
        <div>
            <h1>Carrito vacío</h1>
            <input type="button" value="Agregar sushi" />
            <button onClick="fecth('/carrito/?',1)">Crear Usuario</button>
    
        </div>

    );
}
