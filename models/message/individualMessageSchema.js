const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const individualMessageSchema = new Schema({
    sendTo: {
        type: ObjectId,
        required: true
    },
    sendFrom: {
        type: ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    sendingTime: {
        type: Date,
        default: Date.now
    }

}, { runSettersOnQuery: true });

module.exports = mongoose.model('individualMessageSchema', individualMessageSchema);
