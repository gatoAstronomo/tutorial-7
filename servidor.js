const express = require('express');
const app = express();
const port = 3021;

// Define una ruta para servir el archivo HTML
app.get('/llamada', (req, res) => {
    res.sendFile(__dirname + '/ejemplo_01.html');
});

// Define una ruta para servir el archivo HTML
app.get('/heroes', (req, res) => {
    res.sendFile(__dirname + '/ejemplo_02.html');
});
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});