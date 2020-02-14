const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../helpers/constants');


let generateToken = async (JWT_object, expiry) => {
    return jwt.sign(
        JWT_object
        ,
        JWT_SECRET,
        {
            issuer: 'swaddle'
        });
}
let verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET, {}, function (err, decoded) {
        if (err) {
            return false
        } else {
            return decoded;
        }
    });
}




module.exports = {
    _generateToekn: generateToken,
    // _decodetoken: decodetoken,
    _verifyToken: verifyToken,
}