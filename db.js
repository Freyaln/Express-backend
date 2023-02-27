const mongoose = require('mongoose');


const username = 'freyaln';
const psw = 'T0qQn1m6wz6Uvr1u';
const cluster = 'portfolio.0sd73';
const dbName = 'recipesapp';

mongoose.connect('mongodb+srv://'+username+':'+psw+'@'+cluster+'.mongodb.net/'+dbName+'?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('connected !')
})

module.exports = db;