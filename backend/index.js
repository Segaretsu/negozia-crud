/*Archivo encargado de arrancar el servidor*/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { Mongoose } = require('./database');

/*Configaración del servidor*/
app.set('port', process.env.PORT || 3000);// funciona como el localStorage de javascript
app.set('backend-context', '/negoziaback');

/* Middlewares */
app.use(morgan('dev')); // Ejecuta funciones
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

/* Routes */
app.use(app.get('backend-context') + '/usuarios', require('./routes/usuarios.routes'));
app.use(app.get('backend-context') + '/tipoTelefonos', require('./routes/tipoTelefono.routes'));

/* Empieza el servidor */
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ' + app.get('port'))
});