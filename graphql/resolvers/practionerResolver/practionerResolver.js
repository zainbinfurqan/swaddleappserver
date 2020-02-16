

let practionerSchema = require('../../../models/practioner/practionerSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions'),
    mongoose = require('mongoose');





exports.fetchPactioner = async (args, context) => {

    console.log(args.categoryId)
    let matchObj = {}
    if (args.categoryId)
        matchObj['categoryId'] = mongoose.Types.ObjectId(args.categoryId)

    let arg = {
        query: { ...matchObj }
    }
    let practionerData = await genericFunctions._baseFetch(practionerSchema, arg)
    // let practionerData = await genericFunctions._baseFetch(practionerSchema,
    //     { query: {}, parameterToGet: '_id' })
    console.log(practionerData, "s");
    // let returnObj = {
    //     // data: practionerData.data,
    //     status: true,
    //     statusCode: 200,
    //     message: 'data Found'
    // }
    return practionerData.data



}


exports.createPactionerProfile = async (args, context) => {

    console.log(args)

    let arg = {
        userId: mongoose.Types.ObjectId(args.createPractionerInput.userId),
        address: args.createPractionerInput.address,
        categoryId: mongoose.Types.ObjectId(args.createPractionerInput.categoryId),
        bio: args.createPractionerInput.bio,
        website: args.createPractionerInput.website,
        rate: args.createPractionerInput.rate,
        feeDetails: args.createPractionerInput.feeDetails,
        certification: args.createPractionerInput.certification,
        training: args.createPractionerInput.training,
        education: args.createPractionerInput.education,
        specialServicesOffer: args.createPractionerInput.specialServicesOffer,
        profession: args.createPractionerInput.profession,
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