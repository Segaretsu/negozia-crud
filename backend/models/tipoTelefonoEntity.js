const mongoose = require('mongoose');
const { Schema } = mongoose;

const tipoTelefonoEntity = new Schema({
    nombre: {type: String, require: true}
});

module.exports = mongoose.model('tipoContacto', tipoTelefonoEntity);