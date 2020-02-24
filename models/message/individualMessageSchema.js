const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const individualMessageSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    practionerId: {
        type: ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    senderRole:{
        type: String,
        required: true
    },
    sendingTime: {
        type: Date,
        default: Date.now
    }

}, { runSettersOnQuery: true });

module.exports = mongoose.model('individualMessageSchema', individualMessageSchema);
