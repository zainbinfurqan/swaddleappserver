

let User = require('../../../models/user/userSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions'),
    cacheModel = require('../../../models/cache/cacheSchema'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    { JWT_SECRET } = require('../../../helpers/constants'),
    jtwToken = require('../../../helpers/jwt-helper');





//==============================================================//
//-----------------------USER SIGNUP METHODS--------------------//
//=============================================================//



/*-------function signup------//
**@parmas required (email, password)
*/

exports.userSignUp = async (args, context) => {

    if (args.userInput.firstName && args.userInput.lastName && args.userInput.email && args.userInput.password && args.userInput.cellNumber) {
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
        let arg = {
            firstName: args.userInput.firstName,
            lastName: args.userInput.lastName,
            role: args.userInput.role,
            email: args.userInput.email,
            password: hashedPassword,
            cellNumber: args.userInput.cellNumber
        }
        let user = await genericFunctions._basePost(User, arg);
        if (!user.status) {
            if (user.error['code'] == 11000)
                return { status: false, statusCode: 203, message: 'user already exist',fullName:"", userId: '', email: '', token: '' }
            return { status: false, statusCode: 203, message: user.error,fullName:"", userId: '', email: '', token: '' }
        }
        let obj = {
            userId: user.data._id,
            email: user.data.email
        }
        const token = await jtwToken._generateToekn(obj, '60');
        let jwtToken_ = await genericFunctions._basePost(cacheModel, { value: { key: token } })
        // const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        return {
            status: true, statusCode: 200,
            message: "User Created",
            userId: user.data._id,
            email: user.data.email,
            fullName: user.data.firstName +' '+ user.data.lastName,
            token
        }
    }
    else {
        return { status: false, statusCode: 203, message: "please fill all the fields",fullName:"", userId: '', email: '', token: '' }

    }

}


