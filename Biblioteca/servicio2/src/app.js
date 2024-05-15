//este se encarga de alquilar libros
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Endpoint para solicitar un préstamo
app.post('/prestamo', (req, res) => {
    // Aquí iría la lógica para solicitar un préstamo
    res.send('Solicitud de préstamo recibida');
});

// Endpoint para devolver un libro prestado
app.post('/devolucion', (req, res) => {
    // Aquí iría la lógica para devolver un libro prestado
    res.send('Devolución de libro realizada');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servicio 2 en ejecución en http://localhost:${PORT}`);
});