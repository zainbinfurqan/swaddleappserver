const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cellNumber: {
        type: Number,
        required: true
    },
    education: {
        type: String,
    },
    experience: {
        type: String,
    },
    qualifications: {
        type: String,
    },
    subSpecialties: {
        type: String,
    },
}, { runSettersOnQuery: true });

module.exports = mongoose.model('User', userSchema);
