const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/negozia-crud';
const URI = 'mongodb+srv://root:Admin1234@cluster0-v8hok.gcp.mongodb.net/negoziadb?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('La BD esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;