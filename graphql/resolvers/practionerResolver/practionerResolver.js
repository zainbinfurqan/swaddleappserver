

let practionerSchema = require('../../../models/practioner/practionerSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions'),
    mongoose = require('mongoose');





exports.fetchPactioner = async (args, context) => {
    let matchObj = {}
    if (args.categoryId)
        matchObj['categoryId'] = mongoose.Types.ObjectId(args.categoryId)
    let arg = {
        query: [
            {
                $match: { ...matchObj },
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userData"
                }
            },
            { $unwind: "$userData" },
            {
                $project: {
                    address:1,
                    categoryId:1,
                    bio:1,
                    website:1,
                    rate:1,
                    feeDetails:1,
                    certification:1,
                    training:1,
                    education:1,
                    specialServicesOffer:1,
                    profession:1,
                    userId:1,
                    // userId_: "$userData._id",
                    firstName: "$userData.firstName",
                    lastName: "$userData.lastName"
                }
            }
        ]
        
    }
    let practionerData = await genericFunctions._baseFetch(practionerSchema, arg,"Aggregate")
    console.log(practionerData, "s");
    return practionerData.data
}


exports.createPactionerProfile = async (args, context) => {
    let arg = {
        userId: mongoose.Types.ObjectId(args.createPractionerInput.userId),
        // address: args.createPractionerInput.address,
        categoryId: mongoose.Types.ObjectId(args.createPractionerInput.categoryId),
        NPInumber: args.createPractionerInput.NPInumber,
        streetAddress: args.createPractionerInput.streetAddress,
        city: args.createPractionerInput.city,
        state: args.createPractionerInput.state,
        zipCode: args.createPractionerInput.zipCode,
        phoneNumber: args.createPractionerInput.phoneNumber,
        organicationName: args.createPractionerInput.organicationName,
        // profilePic: args.createPractionerInput.profilePic ? args.createPractionerInput.profilePic : {url:"https://raw.githubusercontent.com/zainbinfurqan/swaddleappserver/dev/uploads/default-avatar.png"},
        profilePic:  "https://raw.githubusercontent.com/zainbinfurqan/swaddleappserver/dev/uploads/default-avatar.png",
        Specialties: args.createPractionerInput.Specialties,
        // bio: args.createPractionerInput.bio,
        // website: args.createPractionerInput.website,
        // rate: args.createPractionerInput.rate,
        // feeDetails: args.createPractionerInput.feeDetails,
        // certification: args.createPractionerInput.certification,
        // training: args.createPractionerInput.training,
        // education: args.createPractionerInput.education,
        // specialServicesOffer: args.createPractionerInput.specialServicesOffer,
        // profession: args.createPractionerInput.profession,
    }
    let practioner = await genericFunctions._basePost(practionerSchema, arg)
    if (!practioner.status) {
        return { status: false, statusCode: 203, message: practioner.error }
    }
    return { status: true, statusCode: 200, message: 'Profile Updated' }
}


exports.updatePactioner = async (args, context) => {

}

exports.deletePactioner = async (args, context) => {

}