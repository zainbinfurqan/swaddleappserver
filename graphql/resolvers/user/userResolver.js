

let userModel = require('../../../models/user/userSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions');




//===================================================================//
//---------------------------USER PROFILE METHODS-------------------//
//=================================================================//

exports.fetchUser = async (args, context) => {

}

exports.updateUser = async (arg, context) => {
    console.log(arg)

    // if (arg.updateUserInput.education && arg.updateUserInput.experience && arg.updateUserInput.qualifications && arg.updateUserInput.subSpecialties) {
    //     console.log(arg)
    //     let updateObject = {
    //         education: arg.updateUserInput.education,
    //         experience: arg.updateUserInput.experience,
    //         qualifications: arg.updateUserInput.qualifications,
    //         subSpecialties: arg.updateUserInput.subSpecialties
    //     }

    //     let args = {
    //         query: {
    //             _id: arg.updateUserInput.userId
    //         },
    //         updateObject
    //     }

    //     let updateUserProfile = await genericFunctions._basePut(userModel, args, 'findOneAndUpdate')
    //     console.log(updateUserProfile)
    //     return { education: "1", experience: "1", qualifications: "1", subSpecialties: "1", status: true, statusCode: "1", message: "1", _id: "1" }
    // } else {
    //     return { education: "", experience: "", qualifications: "", subSpecialties: "", status: false, statusCode: "", message: "", _id: "" }
    // }


}


exports.deleteUser = async () => {

}


