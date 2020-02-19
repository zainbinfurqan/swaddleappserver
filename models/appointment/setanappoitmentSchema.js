const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const setanappoitmentSchema = new Schema({

    day: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    practionerId: {
        type: ObjectId,
        required: true
    }
}, { runSettersOnQuery: true });

module.exports = mongoose.model('setanappoitmentSchema', setanappoitmentSchema);
