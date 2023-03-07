const ObjectId = require('mongodb').ObjectId
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    created: Date,
    jwtToken: String,
    jwtSecret: String,
    fav_recipes_id: {
        type: [String],
    },
    diets: {
        gluten_free: Boolean,
        vegetarian: Boolean,
        vegan: Boolean,
        pescetarian: Boolean,
        paleo: Boolean
    },
    allergies: {
        dairy: Boolean,
        egg: Boolean,
        gluten: Boolean,
        grain: Boolean,
        peanut: Boolean,
        seafood: Boolean,
        sesame: Boolean,
        shellfish: Boolean,
        soy: Boolean,
        sulfite: Boolean,
        tree_nut: Boolean,
        wheat: Boolean,
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;