// const User = require('../userSchema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
//
// const checkCredentials = (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//
//     console.log(req.body)
//
//     User.findOne({email}, (error, user) => {
//         if (error) {
//             res.send(error);
//         }
//         else if (!user) {
//             console.log('User not found')
//         }
//         else {
//             bcrypt.compare(password, user.password, (error, response) => {
//                 if (error) {
//                     res.send(error);
//                 }
//                 else if (response) {
//                     if (user.jwtToken) {
//                         res.sendStatus(200)
//                     }
//                     else {
//                         console.log('login successful')
//                         const payload = {
//                             userId: user._id,
//                             email: user.email,
//                         };
//                         const options = {
//                             expiresIn: '2d',
//                         }
//                         const secret = process.env.JWT_SECRET;
//                         const token = jwt.sign(payload, secret, options);
//                         res.header('Authorization', `Bearer ${token}`).send({token});
//
//                         User.findByIdAndUpdate(payload.userId, {
//                             jwtToken: token}, (error, user) => {
//                             if (error) {
//                                 res.send(error);
//                             }
//                         });
//                         res.redirect('/');
//                     }
//                 }
//                 else {
//                     console.log('Password don\'t match')
//                 }
//             })
//         }
//     })
// }
//
// module.exports = {
//     checkCredentials
// }