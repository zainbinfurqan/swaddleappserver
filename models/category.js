const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        lowercase: true,
        unique:true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
   
});

module.exports = mongoose.model('Category', categorySchema);
