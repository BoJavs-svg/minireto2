const http = require("http");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const server = http.createServer((req, res) => {
    res.end("Hello world!");
    }
);

server.listen(3030, () => {
    console.log("Server is running on port 3030");
}
);
