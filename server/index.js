
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

require('dotenv').config()
const mysql = require('mysql2')
const DB=process.env.DATABASE_URL
const con= mysql.createConnection(DB)

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const fs = require('fs');
const path = require('path');

app.post('/nuevo_carrito/:nombre', (req, res) => {
    con.query("INSERT INTO CARRITO (nombre) VALUES (?)", [req.params.nombre], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/sushi', (req, res) => {
    con.query('SELECT * FROM SUSHI', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/carrito/:carrito_id', (req, res) => {
    con.query('SELECT DISTINCT(SUSHI.nombre), COUNT(CARRITO_SUSHI.sushi_id) AS cantidad FROM CARRITO_SUSHI INNER JOIN SUSHI ON CARRITO_SUSHI.sushi_id = SUSHI.sushi_id WHERE CARRITO_SUSHI.carrito_id = ? GROUP BY CARRITO_SUSHI.sushi_id;', [req.params.carrito_id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/lastCarrito', (req, res) => {
    console.log("lastCarrito");
    con.query('SELECT MAX(carrito_id) AS carrito_id FROM CARRITO', (err, rows) => {
        if (err){
            console.log(err);
            throw err;
        }
        console.log(rows);
        res.send(rows);
    });
});

//AddSushi
app.post('/addSushi/:sushi_id/:carrito_id', (req, res) => {    
        con.query("INSERT INTO CARRITO_SUSHI (carrito_id, sushi_id) VALUES (?, ?)", [req.params.carrito_id, req.params.sushi_id], (err, rows) => {
            if (err) throw err;
            res.send(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


