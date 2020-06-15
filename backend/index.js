/*Archivo encargado de arrancar el servidor*/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

const { Mongoose } = require('./database');

/*Configaración del servidor*/
app.set('port', process.env.PORT || 3000);// funciona como el localStorage de javascript
app.set('backend-context', '/negoziaback');
app.set('front-end' , path.join(__dirname.replace('backend', ''), 'frontend/dist/frontend'));

/* Middlewares */
app.use(morgan('dev')); // Ejecuta funciones
app.use(express.json());
app.use(cors({origin:'https://negozia-crud.herokuapp.com/'}));
// static file
app.use(express.static(app.get('front-end')));
// C:\Users\Sebastian\Documents\Programacion\Proyectos\Apps\Negozia\backend

/* Routes */
app.use(app.get('backend-context') + '/usuarios', require('./routes/usuarios.routes'));
app.use(app.get('backend-context') + '/tipoTelefonos', require('./routes/tipoTelefono.routes'));

/* Empieza el servidor */
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ' + app.get('port'));
    console.log("RUTA SERVER" + __dirname);
    console.log("RUTA VISTA" + app.get('front-end'));
});