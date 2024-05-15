// estw se encarga de ver si hay libros disponibles en la biblioteca
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Array de ejemplo para simular el catálogo de libros
const catalogoLibros = [
    { id: 1, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", genero: "Fantasía" },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico" },
    { id: 3, titulo: "1984", autor: "George Orwell", genero: "Ciencia ficción" }
];

// Endpoint para obtener todos los libros
app.get('/libros', (req, res) => {
    res.json(catalogoLibros);
});

// Endpoint para buscar libros por título
app.get('/libros/buscar', (req, res) => {
    const { titulo } = req.query;
    if (!titulo) {
        return res.status(400).json({ error: "Se requiere el parámetro 'titulo' para buscar libros." });
    }

    const librosEncontrados = catalogoLibros.filter(libro =>
        libro.titulo.toLowerCase().includes(titulo.toLowerCase())
    );

    res.json(librosEncontrados);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servicio 1 en ejecución en http://localhost:${PORT}`);
});
