const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');
const User = require('../userSchema');

const createNewUser = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const favRecipesIds = JSON.parse(req.body.fav_recipes_id);

    const newUser = new User({
        _id: ObjectId(),
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        created: new Date(),
        fav_recipes_id: favRecipesIds,
        diets: {
            gluten_free: req.body.gluten_free,
            vegetarian: req.body.vegetarian,
            vegan: req.body.vegan,
            pescetarian: req.body.pescetarian,
            paleo: req.body.paleo
        },
        allergies: {
            dairy: req.body.dairy,
            egg: req.body.egg,
            gluten: req.body.gluten,
            grain: req.body.grain,
            peanut: req.body.peanut,
            seafood: req.body.seafood,
            sesame: req.body.sesame,
            shellfish: req.body.shellfish,
            soy: req.body.soy,
            sulfite: req.body.sulfite,
            tree_nut: req.body.tree_nut,
            wheat: req.body.wheat,
        }
    });

    newUser.save((error, newUser) => {
        if(error) {
            res.send(error);
        }
        else {
            res.redirect('/login');
        }
    });
};

module.exports = {
    createNewUser
};