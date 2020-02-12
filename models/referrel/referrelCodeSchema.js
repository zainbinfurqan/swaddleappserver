const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const referrelCodeSchema = new Schema({

    referrelCode: {
        type: ObjectId,
        required: true
    },
    createDate: {
        type: Date,
        required: Date.now
    },
    expireDate: {
        type: String,
        required: true
    },
    createBy:{
        type: ObjectId,
        required: true
    }

}, { runSettersOnQuery: true });

module.exports = mongoose.model('referrelCodeSchema', referrelCodeSchema);
