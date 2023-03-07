const RegisterModel = require('../models/register.model');
const AuthModel = require("../models/auth.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
require('dotenv').config();

const RegisterController = {
    register: async (req, res) => {
        const {email, password, username, diets, allergies } = req.body;
        try {
            const userAlreadyExist = await AuthModel.login(email)

            if(userAlreadyExist) {
                return res.status(401).send('User already exist with this email');
            }

            const hashedPassword = bcrypt.hashSync(password, 10);
            const date = new Date();
            const user = await RegisterModel.createNewUser({email, hashedPassword, username, date, diets, allergies})
                 .then(res => console.log(res))
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
}

module.exports = RegisterController;