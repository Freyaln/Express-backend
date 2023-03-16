const User = require('../userSchema');

const RecipeModel = {
    addFavorites: (userId, recipeId) => {
        return User.findByIdAndUpdate(userId, {$push: {fav_recipes_id: recipeId}})
    },
    getFavorites: (userId) => {
        return User.findById({_id: userId}).exec();
    },
    removeFavorites: (userId, recipeId) => {
        return User.findByIdAndUpdate(userId, {$pull: {fav_recipes_id: recipeId}})
    },
}

module.exports = RecipeModel;