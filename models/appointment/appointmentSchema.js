const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({

    day: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    practionerId:{
        type:ObjectId
    },
    time:[]
}, { runSettersOnQuery: true });

module.exports = mongoose.model('appointmentSchema', appointmentSchema);
