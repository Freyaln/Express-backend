const AuthModel = require('../models/auth.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require('dotenv').config();

const AuthController = {

    login: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await AuthModel.login(email)

            if (!user) {
                return res.status(401).send('Invalid email or password');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).send('Invalid email or password');
            }

            if (user.jwtToken) {
                return res.status(200).json({token: user.jwtToken});
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

            res.setHeader('Authorization', `Bearer ${token}`).sendStatus(200).json({token});
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
}

module.exports = AuthController;