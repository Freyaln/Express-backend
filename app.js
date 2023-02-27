const express = require('express');
const cors = require('cors');
const router = require('./routers/router');

require('dotenv').config();

const db = require('./db');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.set('application/json')
    next();
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);
app.use(express.json());

app.listen(5000, () => {
    console.log('Server listening on port 5000')
});
