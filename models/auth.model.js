const User = require('../userSchema');

const AuthModel = {
    login: (email) => {
        return User.findOne({email}).exec();
    }
};

module.exports = AuthModel;
