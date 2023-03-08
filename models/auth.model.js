const User = require('../userSchema');

const AuthModel = {
    login: (email) => {
        return User.findOne({email}).exec();
    },

    checkPassword: (id) => {
        return User.findById({_id: id}).exec();
    },
    changePassword: (id, updatedPassword) => {
        return User.findByIdAndUpdate(id, {password: updatedPassword})
    }
};

module.exports = AuthModel;
