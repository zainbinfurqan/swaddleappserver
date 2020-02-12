const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({

    heathProviderId: {
        type: ObjectId,
        required: true
    },
    appointmentDataTime: {
        type: String,
        required: true
    }

}, { runSettersOnQuery: true });

module.exports = mongoose.model('appointmentSchema', appointmentSchema);
