const TipoTelefonoEntity = require('../models/tipoTelefonoEntity');
const tipoTelefonoController = {};

tipoTelefonoController.getTipoTelefonos = async (req, res) => {
    const listaUsuarios = await TipoTelefonoEntity.find();
    res.json(listaUsuarios);
};

tipoTelefonoController.crearTipoTelefono = async (req, res) => {
    const telefono = new TipoTelefonoEntity(req.body);
    await telefono.save();
    res.json({'status':'tipo teléfono guardado'});
};

tipoTelefonoController.getTelefonoById = async (req, res) => {
    const telefono = await TipoTelefonoEntity.findById(req.params.id);
    res.json(telefono);
};

tipoTelefonoController.modificarTipoTelefono = async (req, res) => {
    const { id } = req.params;
    const telefono = {
        nombre: req.body.nombre
    };
    await TipoTelefonoEntity.findByIdAndUpdate(id, {$set: telefono}, {new: true});
    res.json({status: 'tipo teléfono actualizado'});
};

tipoTelefonoController.eliminarTipoTelefono = async (req, res) => {
    const { id } = req.params;
    await TipoTelefonoEntity.findByIdAndRemove(id);
    res.json({status: 'tipo teléfono eliminado'});
};

module.exports = tipoTelefonoController;