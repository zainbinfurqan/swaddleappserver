const auth = require('./auth');
const authResolver = require('./authenticationResolver/signupResolver');
const userResolver = require('./user/userResolver');
const loginResolver = require('./authenticationResolver/loginResolver');
const categoryResolver = require('./categoryResolver/categoryResolver');
const messageResolver = require('./messageResolver/messageResolver')
const searchResolver = require('./searchResolver/searchResolver');
const events = require('./events');
const bookings = require('./bookings');
// const categorys = require('./category')

const rootResolver = {
    // ...auth,
    ...authResolver,
    ...loginResolver,
    ...categoryResolver,
    ...events,
    ...bookings,
    ...searchResolver,
    ...messageResolver,
    ...userResolver
};
module.exports = rootResolver;
