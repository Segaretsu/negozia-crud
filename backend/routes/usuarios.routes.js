const exprees = require('express');
const router = exprees.Router();

const usuario = require('../controllers/usuario.controller')

router.get('/', usuario.getUsuarios);
router.post('/', usuario.crearUsuario);
router.get('/:id', usuario.getUsuarioById);
router.put('/:id', usuario.modificarUsuario);
router.delete('/:id', usuario.eliminarUsuario);

module.exports = router;