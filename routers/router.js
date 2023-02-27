const express = require('express')
const router = express.Router()


const userRouter = require('./users.router');
const authRouter = require('./auth.router');

//routers.use('/signin', userRouter)
router.use('/auth', authRouter)

module.exports = router;
