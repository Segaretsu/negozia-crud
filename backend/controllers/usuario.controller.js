const UsuarioEntity = require('../models/usuarioEntity');
const usuarioEntity = require('../models/usuarioEntity');
const usuarioController = {};

usuarioController.getUsuarios = async (req, res) => {
    const listaUsuarios = await UsuarioEntity.find();
    res.json(listaUsuarios);
};

usuarioController.crearUsuario = async (req, res) => {
    const usuario = new usuarioEntity ({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        tipoTelefono: req.body.tipoTelefono,
        correo: req.body.correo,
    });
    await usuario.save();
    res.json({'status':'Usuario guardado'});
};

usuarioController.getUsuarioById = async (req, res) => {
    const usuario = await UsuarioEntity.findById(req.params.id);
    res.json(usuario);
};

usuarioController.modificarUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        tipoTelefono: req.body.tipoTelefono,
        correo: req.body.correo,
    };
    await UsuarioEntity.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'usuario actualizado'});
};

usuarioController.eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    await UsuarioEntity.findByIdAndRemove(id);
    res.json({status: 'Usuario eliminado'});
};
module.exports = usuarioController;