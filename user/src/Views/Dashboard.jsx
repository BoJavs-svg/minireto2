import React ,{useState} from 'react';
import Table from "../Components/Table";
import Carrito from "../Components/Carrito";
import NCart from "../Components/NCart";
import LeftBar from "../Components/LeftBar";
import "../styles/Dashboard.css";

function Dashboard() {
  const [isLeftBarVisible, setIsLeftBarVisible] = useState(false);

  const toggleLeftBar = () => {
    setIsLeftBarVisible(!isLeftBarVisible);
    const leftBar = document.querySelector('.leftBar');
    leftBar.style.visibility = isLeftBarVisible ? 'hidden' : 'visible';
    leftBar.style.width = isLeftBarVisible ? '0%' : '10%';
    const main = document.querySelector('.main');
    main.style.width = isLeftBarVisible ? '100%' : '90%';

  };
  return (
    <div className="App">
      <div className="leftBar">
        <LeftBar/>
      </div>
      <div className="main">
      <header className="head">
      <button className="button" onClick={toggleLeftBar}>☰</button>
            <h1>Sushi's Sushi</h1>
            <img src={require("../Assets/pug_stock.png")} alt="Logo" className="logo"/> 
      </header>
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
        <NCart/>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;