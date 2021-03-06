

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
    if (email && password) {
        let login_ = await genericFunctions._baseFetch(User, { query: { email } }, 'FindOne')
        console.log(login_)
        if (login_.data) {
            const isEqual = await bcrypt.compare(password, login_.data.password);
            if (isEqual) {
                const token = jwt.sign({ userId: login_.data._id, email: login_.data.email }, JWT_SECRET, { expiresIn: '1h' });
                return {
                    status: true,
                    statusCode: 200,
                    message: "Login Successfully",
                    userId: login_.data._id,
                    email: login_.data.email,
                    fullName: login_.data.firstName +' '+ login_.data.lastName,
                    token
                }
            }
            return { status: false, statusCode: 203, message: "invalid email or password",fullName:"", userId: '', email: '', token: '' }
        }
        else {
            return { status: false, statusCode: 203, message: "invalid email or password",fullName:"", userId: '', email: '', token: '' }
        }
    } else {
        return { status: false, statusCode: 203, message: "please fill all the fields",fullName:"", userId: '', email: '', token: '' }
    }
}

//-------function login user------//
//@parmas required (email, token)

exports.logout = async () => {

}
