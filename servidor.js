const http = require ("http");
const express = require ("express");
const app = express();


app.get("/" , function(req, res) {
    res.send("<h1> Seja bem vindo ao meu servidor!! Estamos conectados </h1>");
});

http.createServer(app).listen(3000 ,() => console.log ("Servidor rodando localmente na porta 3000!"));



