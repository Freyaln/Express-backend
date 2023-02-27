const User = require('../userSchema');

const AuthModel = {
    login: (email) => {
        console.log(email)
        return User.findOne({email}).exec();
    }
};

module.exports = AuthModel;
