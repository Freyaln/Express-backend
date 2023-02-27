const AuthModel = require('../models/auth.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require('dotenv').config();

const AuthController = {

    login: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        console.log(password)

        try {
            const user = await AuthModel.login(email)

            if (!user) {
                return res.status(401).send('Invalid email or password');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                console.log('password')
                return res.status(401).send('Invalid email or password');
            }

            if (user.jwtToken) {
                return res.sendStatus(200);
            }
            const payload = {
                userId: user._id, email: user.email,
            };
            const options = {
                expiresIn: '2d',
            };
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign(payload, secret, options);

            await user.updateOne({jwtToken: token});

            res.type('application/json')
            res.header('Authorization', `Bearer ${token}`).json({token});
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
}

module.exports = AuthController;