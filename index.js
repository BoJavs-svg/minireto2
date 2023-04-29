const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mysql = require("mysql2");
const DB = process.env.DATABASE_URL;
const con = mysql.createConnection(DB);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');

//"/sushi"
app.get('/sushi', (req, res) => {
    con.query('SELECT * FROM SUSHI', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
app.post('/sushi/:nombre', (req, res) => {
    con.query("INSERT INTO SUSHI (nombre , arroz, alga_nori, kombu, salmon, atun, aguacate, pepino, wasabi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.params.nombre, req.body.arroz, req.body.alga_nori, req.body.kombu, req.body.salmon, req.body.atun, req.body.aguacate, req.body.pepino, req.body.wasabi], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
app.get('/sushi/:sushi_id', (req, res) => {
    con.query('SELECT * FROM SUSHI WHERE sushi_id = ?', [req.params.sushi_id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
app.put('/sushi/:sushi_id', (req, res) => {
    con.query("UPDATE SUSHI SET nombre = ?, arroz = ?, alga_nori = ?, kombu = ?, salmon = ?, atun = ?, aguacate = ?, pepino = ?, wasabi = ? WHERE sushi_id = ?", [req.body.nombre, req.body.arroz, req.body.alga_nori, req.body.kombu, req.body.salmon, req.body.atun, req.body.aguacate, req.body.pepino, req.body.wasabi, req.params.sushi_id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
app.delete('/sushi/:sushi_id', (req, res) => {
    con.query("DELETE FROM SUSHI WHERE sushi_id = ?", [req.params.sushi_id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

//"/carrito"
app.post('/nuevo_carrito/:nombre', (req, res) => {
    con.query("INSERT INTO CARRITO (nombre) VALUES (?)", [req.params.nombre], (err, rows) => {
        if (err) throw err;
        res.send(rows.insertId.toString());
    });
});
app.get('/carrito/:carrito_id', (req, res) => {
    con.query('SELECT * FROM CARRITO_SUSHI INNER JOIN SUSHI ON CARRITO_SUSHI.sushi_id = SUSHI.sushi_id WHERE CARRITO_SUSHI.carrito_id = ?;', [req.params.carrito_id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
app.get('/lastCarrito', (req, res) => {
    con.query('SELECT MAX(carrito_id) AS carrito_id FROM CARRITO', (err, rows) => {
        if (err)throw err;
        res.send(rows);
    });
});
app.post('/addSushi/:sushi_id/:carrito_id', (req, res) => {    
    con.query("INSERT INTO CARRITO_SUSHI (carrito_id, sushi_id) VALUES (?, ?)", [req.params.carrito_id, req.params.sushi_id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
app.delete('/deleteSushi/:cSushi_id', (req, res) => {
    con.query("DELETE FROM CARRITO_SUSHI WHERE carrito_sushi_id = ?", [req.params.cSushi_id], (err, rows) => { 
        if (err) throw err;
        res.send(rows);
    });
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`); 
});

//
app.use(express.static(path.resolve("user/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve("user/build", "index.html"));
});
module.exports = app;