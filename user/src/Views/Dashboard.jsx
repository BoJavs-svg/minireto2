import React from "react";
import Table from "../Components/Table";
import Carrito from "../Components/Carrito";
import './App.css';

function Dashboard() {
  return (
    <div className="App">
      <div className="left">
        <h1>Dashboard</h1>
        <Table/>
      </div>
      <div className="right">
        <h1>Carrito</h1>
        <Carrito/>
      </div>

    </div>
  );
  
}

export default Dashboard;