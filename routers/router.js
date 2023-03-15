const express = require('express')
const router = express.Router()

const authRouter = require('./auth.router');
const registerRouter = require('./register.router');
const recipeRouter = require('./recipe.router');

router.use('/auth', authRouter)
router.use('/register', registerRouter)
router.use('/recipe', recipeRouter)

module.exports = router;
