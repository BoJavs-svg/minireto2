import React from "react";
import Table from "../Components/Table";
import Carrito from "../Components/Carrito";
import NewCart from "../Components/NewCart";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="App">
      <div className="top">
          <div className="left">
            <div className="table">
              <Table/>
            </div>
          </div>  
          <div className="right">
            <h1>Carrito</h1>
            <Carrito/>
          </div>
      </div>
      <div className="bottom">
        <h1>Crear Carrito</h1>
        <NewCart/>
      </div>
    </div>
  );
}

export default Dashboard;