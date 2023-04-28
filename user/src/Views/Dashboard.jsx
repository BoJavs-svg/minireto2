import React ,{useState} from 'react';
import Table from "../Components/Table";
import Carrito from "../Components/Carrito";
import NCart from "../Components/NCart";
import LeftBar from "../Components/LeftBar";
import "../styles/Dashboard.css";
import NSushi from "../Components/NSushi";

function Dashboard() {
  return (
    <div className="App">
      <div className="main">
      <header className="head">
            <h1>Sushi's Sushi</h1>
            <img src={require("../Assets/sushiLogo.png")} alt="Logo" className="logo"/> 
      </header>
      <div className="top">
          <div className="left">
            <div className="table">
              <Table/>
            <div className="nSushi">
              <NSushi/>
            </div>
            </div>
          </div>  
          <div className="right">
            <h1>Carrito</h1>
            <Carrito/>
          </div>
      </div>
      <div className="bottom">
        <NCart/>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;