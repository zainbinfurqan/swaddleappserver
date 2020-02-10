const auth = require('./auth');
const events = require('./events');
const bookings = require('./bookings');
const categorys = require('./category')

const rootResolver = {
    ...auth,
    ...events,
    ...bookings,
    ...categorys
};
module.exports = rootResolver;
