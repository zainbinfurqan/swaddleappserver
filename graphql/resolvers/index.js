const auth = require('./auth');
const userResolver = require('./authenticationResolver/signupResolver');
const loginResolver = require('./authenticationResolver/loginResolver');
const categoryResolver = require('./categoryResolver/categoryResolver');
const searchResolver = require('./searchResolver/searchResolver');
const events = require('./events');
const bookings = require('./bookings');
// const categorys = require('./category')

const rootResolver = {
    // ...auth,
    ...userResolver,
    ...loginResolver,
    ...categoryResolver,
    ...events,
    ...bookings,
    ...searchResolver
    // ...categorys
};
module.exports = rootResolver;
