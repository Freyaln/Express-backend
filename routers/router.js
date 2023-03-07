const express = require('express')
const router = express.Router()

const authRouter = require('./auth.router');
const registerRouter = require('./register.router');

router.use('/auth', authRouter)
router.use('/register', registerRouter)

module.exports = router;
