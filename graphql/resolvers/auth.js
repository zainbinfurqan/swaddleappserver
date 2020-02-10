const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

const { JWT_SECRET } = require('../../helpers/constants');

module.exports = {
    createUser: async args => {
        try {
            const userExist = await User.findOne({ email: args.userInput.email });
            // const userExist = await User.findOne({ name: args.userInput.name });
            if (userExist) {
                throw new Error('User exists already');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
            const user = new User({
                firstName: args.userInput.firstName,
                lastName: args.userInput.lastName,
                email: args.userInput.email,
                password: hashedPassword,
                role:args.userInput.role,
                cellNumber:args.userInput.cellNumber
            });
            const result = await user.save();

            const token = jwt.sign({ userId: result._id, email: result.email }, JWT_SECRET, { expiresIn: '1h' });

            //tokenExpiration in minutes
            return { userId: user._id, token: token, tokenExpiration: 60, email: user.email };
        } catch (err) {
            throw err;
        }
    },
    login: async ({ email, password }) => {
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                throw new Error('User does not exist!');
            }
            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) {
                throw new Error('Password is incorrect!');
            }
            const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

            //tokenExpiration in minutes
            return { userId: user._id, token: token, tokenExpiration: 60, email: user.email };
        } catch (err) {
            throw err;
        }
    }
};
