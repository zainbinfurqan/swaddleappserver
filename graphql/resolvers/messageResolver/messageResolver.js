

const Message = require('../../../models/message/individualMessageSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions'),
    mongoose = require('mongoose');




//==============================================================//
//---------------------------MESSAGE METHODS-------------------//
//=============================================================//

exports.sendIndividualMessage = async (args, context) => {


    if (args.messageInput.sendTo && args.messageInput.sendFrom && args.messageInput.text) {
    console.log(args.messageInput)
        let arg = {
            query: {
                sendTo: mongoose.Types.ObjectId(args.messageInput.sendTo),
                // sendTo: args.messageInput.sendTo,
                sendFrom: mongoose.Types.ObjectId(args.messageInput.sendFrom),
                // sendFrom: args.messageInput.sendFrom,
                text: args.messageInput.text
            }
        }
        // console.log(arg.query)
        let messageData = await genericFunctions._basePost(Message, arg.query)
        console.log(messageData)
        if (!messageData.status)
            return { status: false, statusCode: 203, message: messageData.error }
        if (messageData.data)
            return { status: true, statusCode: 200, message: "Message Send" }
        return { status: false, statusCode: 203, message: "Message Not Send" }

    }
    else {
        return { status: false, statusCode: 203, message: "please fill all the fields" }
    }

}

// exports.fetchCategory = async () => {



// }


// exports.updateCategory = async () => {

// }


// exports.deleteCategory = async () => {

// }