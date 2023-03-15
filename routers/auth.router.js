const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.post("/login", AuthController.login);
router.post('/checkpwd', AuthController.checkPassword);
router.post('/changepwd', AuthController.changePassword);
router.post('/changemail', AuthController.changeEmail);
router.post('/changediets', AuthController.changeDiets);
router.post('/reconnect', AuthController.reconnect);
router.post('/updateuser', AuthController.updateUserInfos);

module.exports = router;