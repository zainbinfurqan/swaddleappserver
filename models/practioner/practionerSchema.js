const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const practionerSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    profileImage: {
        type: Object,

    },
    website: {
        type: String,
        required: true
    },
    profilePic: {

    },
    rate: {
        type: String,
        required: true,
    },
    feeDetails: {
        type: String,
        required: true
    },
    categoryId: {
        type: ObjectId,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    certification: [],
    profession: [],
    training: [],
    education: [],
    specialServicesOffer: {
        type: String,
    }
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
