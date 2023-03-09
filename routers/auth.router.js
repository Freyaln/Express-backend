const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.post("/login", AuthController.login);
router.post('/checkpwd', AuthController.checkPassword);
router.post('/changepwd', AuthController.changePassword);
router.post('/reconnect', AuthController.reconnect);

module.exports = router;