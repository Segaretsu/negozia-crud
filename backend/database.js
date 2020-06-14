const mongoose = require('mongoose');
const URI = 'mongodb://localhost/negozia-crud';

mongoose.connect(URI)
    .then(db => console.log('La BD esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;