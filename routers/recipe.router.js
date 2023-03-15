const express = require('express');
const RecipeController = require('../controllers/recipe.controller')

const router = express.Router();

router.post("/add", RecipeController.addFavorites);

module.exports = router;