const model = require('../models/users.model');
const bcrypt = require("bcrypt");

// const signIn = async (req, res) => {
//     const { email, password } = req.body;
//     console.log(req.body)
//
//     try {
//         const user = await model.UserModel.signIn(email);
//
//         if (!user) {
//             return res.status(401).send('Invalid email or password');
//         }
//
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//
//         if (!isPasswordValid) {
//             return res.status(401).send('Invalid email or password');
//         }
//
//         if (user.jwtToken) {
//             return res.sendStatus(200);
//         }
//         const payload = {
//             userId: user._id,
//             email: user.email,
//         };
//         const options = {
//             expiresIn: '2d',
//         };
//         const secret = process.env.JWT_SECRET;
//         const token = jwt.sign(payload, secret, options);
//
//         await user.updateOne({ jwtToken: token });
//
//         res.header('Authorization', `Bearer ${token}`).json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// }
//
// module.exports = {
//     signIn
// }