
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
app.get('/carrito', (req, res) => {
    fs.readFile('credential.json', (err, data) => {
        if (err) throw err;
        const credentials = JSON.parse(data);
        const id = credentials.id;
        con.query('SELECT s.* FROM CARRITO_SUSHI cs INNER JOIN SUSHI s ON cs.sushi_id = s.sushi_id WHERE cs.carrito_id = ?', [id], (err, rows) => {
            if (err) throw err;
            res.send(rows);
        });
    });
});
app.get('/lastCarrito', (req, res) => {
    con.query('SELECT MAX(carrito_id) AS id FROM CARRITO', (err, rows) => {
        if (err) throw err;
        const id = rows[0].id;
        const filePath = path.join(__dirname, 'credential.json');
        const jsonData = { id: id };
        fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
            if (err) throw err;
        });
        
        res.send(rows);
        });
});
//AddSushi
app.post('/addSushi/:sushi_id', (req, res) => {
    fs.readFile('credential.json', (err, data) => {
        if (err) throw err;
        const credentials = JSON.parse(data);
        const id = credentials.id;
        con.query("INSERT INTO CARRITO_SUSHI (carrito_id, sushi_id) VALUES (?, ?)", [id, req.params.sushi_id], (err, rows) => {
            if (err) throw err;
            res.send(rows);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);


