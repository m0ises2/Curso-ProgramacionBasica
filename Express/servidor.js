//Se carga la librería express;
var express = require('express');

//Instancia de la liberia express, la invocamos:
var app = express();

//Función Listener para atender las peticiones GET al servidor:
app.get('/', function (req, res) {
  res.send('Hello World - Este es el <strong>Home</ strong>');
});

app.get('/cursos', function (req, res) {
  res.send('Hello World - Estos son los <strong>cursos</strong>');
});

//El servidor está escuchando por el puerto 3000:
app.listen(8989);
