const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const messagelistSchema = new Schema({
    sendTo: {
        type: ObjectId,
        required: true
    },
    sendFrom: {
        type: ObjectId,
        required: true
    },
    sendingTime: {
        type: Date,
        default: Date.now
    }

}, { runSettersOnQuery: true });

module.exports = mongoose.model('messagelistSchema', messagelistSchema);
