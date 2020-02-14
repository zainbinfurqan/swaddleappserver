

let practionerSchema = require('../../../models/practioner/practionerSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions'),
    mongoose = require('mongoose');





exports.fetchPactioner = async (args, context) => {

}


exports.createPactionerProfile = async (args, context) => {

    console.log(args)
    let arg = {
        userId: mongoose.Types.ObjectId(args.createPractionerInput.userId),
        address:args.createPractionerInput.address,
        bio:args.createPractionerInput.bio,
        website:args.createPractionerInput.website,
        rate:args.createPractionerInput.rate,
        feeDetails:args.createPractionerInput.feeDetails,
        certification:args.createPractionerInput.certification,
        training:args.createPractionerInput.training,
        education:args.createPractionerInput.education,
        specialServicesOffer:args.createPractionerInput.specialServicesOffer,
    }
    let practioner = await genericFunctions._basePost(practionerSchema,arg)
    console.log(practioner)
    return { status: false, statusCode: 200, message: 's' }

}


exports.updatePactioner = async (args, context) => {

}

exports.deletePactioner = async (args, context) => {

}