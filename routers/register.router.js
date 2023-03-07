const express = require('express');
const RegisterController = require('../controllers/register.controller')

const router = express.Router();

router.post("/account-creation", RegisterController.register);

module.exports = router;