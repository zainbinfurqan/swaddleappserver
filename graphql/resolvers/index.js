const auth = require('./auth');
const userResolver = require('./authenticationResolver/signupResolver');
const loginResolver = require('./authenticationResolver/loginResolver');
const categoryResolver = require('./categoryResolver/categoryResolver');
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
    // ...categorys
};
module.exports = rootResolver;
