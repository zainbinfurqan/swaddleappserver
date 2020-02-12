const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const userCardSchema = new Schema({

    userId: {
        type: ObjectId,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    cardExpireData: {
        type: String,
        required: true
    },
    cardCVCNumber:{
        type: String,
        required: true
    }

}, { runSettersOnQuery: true });

module.exports = mongoose.model('userCardSchema', userCardSchema);
