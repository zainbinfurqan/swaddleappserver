const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const practionerSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true,
        unique: true
    },
    NPInumber: {
        type: Number,
        required: true,
    },
    categoryId: {
        type: ObjectId,
        required: true
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    organicationName: {
        type: String,
        required: true,
    },
    profilePic: [],
    Specialties: [],

    // address: {
    //     type: String,
    //     required: true
    // },
    // bio: {
    //     type: String,
    //     required: true
    // },

    // website: {
    //     type: String,
    //     required: true
    // },

    // rate: {
    //     type: String,
    //     required: true,
    // },
    // feeDetails: {
    //     type: String,
    //     required: true
    // },

    // isDelete: {
    //     type: Boolean,
    //     default: false
    // },
    // certification: [],
    // profession: [],
    // training: [],
    // education: [],
    // profilePic: [],
    // specialServicesOffer: {
    //     type: String,
    // }
    // education: {
    //     type: String,
    // },
    // experience: {
    //     type: String,
    // },
    // qualifications: {
    //     type: String,
    // },
    // subSpecialties: {
    //     type: String,
    // },
}, { runSettersOnQuery: true });

module.exports = mongoose.model('practionerSchema', practionerSchema);
