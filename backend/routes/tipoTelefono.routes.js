const exprees = require('express');
const router = exprees.Router();

const telefono = require('../controllers/tipoTelefono.controller')

router.get('/', telefono.getTipoTelefonos);
router.post('/', telefono.crearTipoTelefono);
router.get('/:id', telefono.getTelefonoById);
router.put('/:id', telefono.modificarTipoTelefono);
router.delete('/:id', telefono.eliminarTipoTelefono);

module.exports = router;