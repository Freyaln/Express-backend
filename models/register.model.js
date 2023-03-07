const User = require('../userSchema');

const RegisterModel = {
    createNewUser: (data) => {
        const {email, hashedPassword, username, date, diets, allergies } = data
        return User.create({email: email, password: hashedPassword, username: username, created: date, diets: diets, allergies: allergies});
    }
};

module.exports = RegisterModel;