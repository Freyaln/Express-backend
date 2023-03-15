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
    },
    changeEmail: (id, updatedEmail) => {
        return User.findByIdAndUpdate(id, {email: updatedEmail})
    },
    changeDiets: (id, updatedDiets) => {
        return User.findByIdAndUpdate(id, {diets: updatedDiets})
    },
    reconnectByToken: (token) => {
        return User.findOne({jwtToken: token}).exec();
    },
    updateUser: (id) => {
        return User.findById({_id: id}).exec();
    }
};

module.exports = AuthModel;
