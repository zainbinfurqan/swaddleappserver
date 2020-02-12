

let User = require('../../../models/user/userSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    { JWT_SECRET } = require('../../../helpers/constants');



//==============================================================//
//-------------------USER LOGIN/LOGOUT METHODS------------------//
//=============================================================//



//-------function login user------//
//@parmas required (email, password)

exports.login = async ({ email, password }) => {
    console.log(email, password)
    if (email && password) {
        let login = await genericFunctions._baseFetch(User, { query: { email } }, 'FindOne')
        console.log(login)
        if (login.data) {
            const isEqual = await bcrypt.compare(password, login.data.password);
            console.log(isEqual)
            if (isEqual) {
                const token = jwt.sign({ userId: login._id, email: login.email }, JWT_SECRET, { expiresIn: '1h' });
                return { status: true, statusCode: 200, message: "Login Successfully", userId: login._id, email: login.email, token }
            }
            return { status: false, statusCode: 203, message: "invalid email or password", userId: '', email: '', token: '' }
        }
        else {
            return { status: false, statusCode: 203, message: "invalid email or password", userId: '', email: '', token: '' }
        }
    } else {
        return { status: false, statusCode: 203, message: "please fill all the fields", userId: '', email: '', token: '' }
    }
}

//-------function login user------//
//@parmas required (email, token)

exports.logout = async () => {

}