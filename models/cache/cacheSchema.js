const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cacheSchema = new Schema({

    value: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { runSettersOnQuery: true });

module.exports = mongoose.model('cacheSchema', cacheSchema);
