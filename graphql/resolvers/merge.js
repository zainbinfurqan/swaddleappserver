const DataLoader = require('dataloader');

const Event = require('../../models/event');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const eventLoader = new DataLoader(eventIds => {
    return getEvents(eventIds);
});

const getEvents = async eventIds => {
    try {
        const events = await Event.find({ _id: { $in: eventIds } });
        return events.map(event => transformEvent(event));
    } catch (err) {
        throw err;
    }
};

const getEvent = async eventId => {
    try {
        const event = await eventLoader.load(eventId.toString());
        return event;
    } catch (err) {
        throw err;
    }
};

const getUser = async userId => {
    try {
        const user = await User.findById(userId);
        return { ...user._doc, _id: user.id, createdEvents: getEvents.bind(this, user._doc.createdEvents) };
    } catch (err) {
        throw err;
    }
};

const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        date: dateToString(event._doc.date),
        creator: getUser.bind(this, event._doc.creator)
    };
};

const transformCategory = categories => {
    console.log(categories)
    return {
        // ...categories._doc,
        _id: categories.id,
        categoryName: categories.categoryName
        // date: dateToString(event._doc.date),
        // creator: getUser.bind(this, event._doc.creator)
    };
};

const transformBooking = booking => {
    return {
        ...booking._doc,
        _id: booking.id,
        user: getUser.bind(this, booking._doc.user),
        event: getEvent.bind(this, booking._doc.event),
        createdAt: dateToString(booking._doc.createdAt),
        updatedAt: dateToString(booking._doc.updatedAt)
    };
};

module.exports = {
    transformCategory,
    transformEvent,
    transformBooking
}
// exports.transformEvent = transformEvent;
// exports.transformBooking = transformBooking;
// exports.transformCategory
