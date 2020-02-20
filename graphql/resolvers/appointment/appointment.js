

const
    appointmentSchema = require('../../../models/appointment/appointmentSchema'),
    setanappointmentSchema = require('../../../models/appointment/setanappoitmentSchema'),
    monogoose = require('mongoose'),
    genericFunctions = require('../../../helpers/util-genricfunctions');



exports.creatAppointmentData = async (args, context) => {
    console.log(args.addAppointmentInputs)
    if (args.addAppointmentInputs.practionerId) {
        let setObj = {
            day: args.addAppointmentInputs.day,
            date: args.addAppointmentInputs.date,
            practionerId: monogoose.Types.ObjectId(args.addAppointmentInputs.practionerId),
            time: args.addAppointmentInputs.time
        }
        let addAppointment = await genericFunctions._basePost(appointmentSchema, setObj)
        if (!addAppointment.status)
            return { status: false, statusCode: 203, message: addAppointment.error }
        return { status: true, statusCode: 200, message: "data add " }
    } else {
        return { status: false, statusCode: 203, message: "Fill all fields" }
    }
}

exports.fetchAppoinmentData = async (args, context) => {
    console.log("fetch")
    let appointmentData = await genericFunctions._baseFetch(appointmentSchema, { query: {} })
    console.log(appointmentData)
    if (!appointmentData.status)
        return []
    return appointmentData.data

}


exports.bookAppointment = async (args, context) => {

    if (args.bookAppointmentInputs.practionerId) {
        let setObj = {
            day: args.bookAppointmentInputs.day,
            date: args.bookAppointmentInputs.date,
            practionerId: monogoose.Types.ObjectId(args.bookAppointmentInputs.practionerId),
            userId: monogoose.Types.ObjectId(args.bookAppointmentInputs.userId),
            time: args.bookAppointmentInputs.time
        }
        let bookAppointment = await genericFunctions._basePost(setanappointmentSchema, setObj)
        if (!bookAppointment.status)
            return { status: false, statusCode: 203, message: bookAppointment.error }
        return { status: true, statusCode: 200, message: "data add " }
    } else {
        return { status: false, statusCode: 203, message: "Fill all fields" }
    }

}
