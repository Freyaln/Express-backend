const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.DB_USERNAME;
const psw = process.env.DB_PSW;
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_COLLECTION;

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