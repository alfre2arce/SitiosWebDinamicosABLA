const express = require("express");
const router = express.Router();
const ClienteController = require("../controller/ClienteController");

// Rutas para listar y mostrar formulario de creación
router.get("/", ClienteController.list);
router.get("/cliente/new", ClienteController.createForm);
router.post("/cliente", ClienteController.create);

// Rutas para editar y actualizar un contacto
router.get("/cliente/:id/edit", ClienteController.editForm);
router.put("/cliente/:id", ClienteController.update);

// Ruta para eliminar un contacto
router.delete("/cliente/:id", ClienteController.delete);

module.exports = router;
