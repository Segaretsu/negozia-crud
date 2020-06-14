const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/negozia-crud';
const URI = 'mongodb+srv://root:Admin1234@negoziadb-v8hok.gcp.mongodb.net/negoziadb?retryWrites=true&w=majority';

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('La BD esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;