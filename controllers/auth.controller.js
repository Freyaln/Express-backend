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
                return res.status(200).json({token: user.jwtToken, username: user.username, id: user._id, diets: user.diets, allergies: user.allergies, fav_recipes_id: user.fav_recipes_id});
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
    },

    checkPassword: async (req, res) => {
        const password = req.body.oldPassword;
        const id = req.body.id

        try {
            const user = await AuthModel.checkPassword(id)

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(403).send('Invalid password');
            }

            res.sendStatus(200);
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }

    },
    changePassword: async (req, res) => {
        const password = req.body.newPassword;
        const id = req.body.id;

        const hashedPassword = bcrypt.hashSync(password, 10);

        try {
            const passwordUpdated = await AuthModel.changePassword(id, hashedPassword)

            if (passwordUpdated) {
                res.sendStatus(200);
            }
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    },
    changeEmail: async (req, res) => {
        const email = req.body.newEmail;
        const id = req.body.id;

        try {
            const updatedEmail = await AuthModel.changeEmail(id, email)

            if (updatedEmail) {
                res.sendStatus(200);
            }
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    },
    changeDiets: async (req, res) => {
        const diets = req.body.diets;
        const id = req.body.id;

        try {
            const updatedDiets = await AuthModel.changeDiets(id, diets)

            if (updatedDiets) {
                const { diets } = updatedDiets
                res.send(diets);
            }
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    },
    reconnect: async (req, res) => {
        const token = req.body.token;

        try {
            const user = await AuthModel.reconnectByToken(token)

            if (user) {
                return res.status(200).json({username: user.username, id: user._id, diets: user.diets, allergies: user.allergies, fav_recipes_id: user.fav_recipes_id});
            }
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    },
    updateUserInfos: async (req, res) => {
        const id = req.body.id;

        try {
            const user = await AuthModel.updateUser(id)

            if (user) {
                return res.status(200).json({username: user.username, id: user._id, diets: user.diets, allergies: user.allergies, fav_recipes_id: user.fav_recipes_id});
            }
        } catch(error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
}

module.exports = AuthController;