require("dotenv").config();
const express = require('express');
const connectDB = require("./config/database");
const path = require("path");
const clienteRoutes = require("./routes/ClienteRoutes");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// Conectar con MongoDB
connectDB();

// Configuración
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Para soportar PUT y DELETE

// Configurar motor de vistas
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname,  "views"));

// Middleware para servir archivos estáticos desde public/
app.use(express.static(path.join(__dirname, '../public')));

// Importar rutas
app.use("/", clienteRoutes); 

module.exports = app;
