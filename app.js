const express = require('express');
const cors = require('cors');
const router = require('./routers/router');

require('dotenv').config();

const db = require('./db');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(5000, () => {
    console.log('Server listening on port 5000')
});


