const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    ci: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    celular: { type: String, required: true },
    correo: { type: String, required: true },
});

module.exports = mongoose.model('clientes', clienteSchema);
