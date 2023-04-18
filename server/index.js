
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

app.get('/nuevo_carrito/?',nombre, (req, res) => {
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

app.get('/carrito/id', (req, res) => {
    con.query('SELECT s.* FROM CARRITO_SUSHI cs INNER JOIN sushi s ON cs.id_sushi = s.id WHERE cs.id_carrito = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);

