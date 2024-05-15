// Este se encarga de gestionar la base de datos de libros

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3003;

// Conexión a la base de datos MongoDB
mongoose
  .connect("mongodb://root:root@mongo")
  .then(async () => {
    // Conexión exitosa, verifica si la base de datos biblioteca existe
    const db = mongoose.connection.db;
    const databaseList = await db.admin().listDatabases();
    const databaseNames = databaseList.databases.map((db) => db.name);

    if (!databaseNames.includes("biblioteca")) {
      // La base de datos biblioteca no existe, crea la base de datos
      await db.createCollection("biblioteca");
      console.log("Base de datos biblioteca creada");
    } else {
      console.log("Conexión a MongoDB establecida");
    }
  })
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Definir el esquema del libro
const libroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  genero: String,
});

// Modelo del libro
const Libro = mongoose.model("Libro", libroSchema);

// Endpoint para crear un libro
app.post("/libros", async (req, res) => {
  try {
    const { titulo, autor, genero } = req.body;
    const nuevoLibro = new Libro({ titulo, autor, genero });
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el libro" });
  }
});

// Endpoint para obtener todos los libros
app.get("/libros", async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servicio 3 en ejecución en http://localhost:${PORT}`);
});
