const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioEntity = new Schema({
    nombres: {type: String, require: true},
    apellidos: {type: String, require: true},
    sexo: {type: String, require: true},
    telefono: {type: Number, require: true},
    tipoTelefono: {type: String, require: true},
    correo: {type: String, required: true}
});

module.exports = mongoose.model('usuario', usuarioEntity);