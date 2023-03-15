const RecipeModel = require('../models/recipe.model');
require('dotenv').config();

const RecipeController = {
    addFavorites: async (req, res) => {
        const userId = req.body.userId;
        const recipeId = req.body.recipeId;

        try {
            const userFav = await RecipeModel.addFavorites(userId, recipeId);

            if (userFav) {
                const updatedUserFav = await RecipeModel.getFavorites(userId);

                if(updatedUserFav) {
                    const { fav_recipes_id } = updatedUserFav;
                   res.send(fav_recipes_id);
                }
            }
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
}

module.exports = RecipeController;