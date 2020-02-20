

const Message = require('../../../models/message/individualMessageSchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions'),
    messagelistSchema = require('../../../models/message/messagelistSchema'),
    mongoose = require('mongoose');




//==============================================================//
//---------------------------MESSAGE METHODS-------------------//
//=============================================================//

exports.sendIndividualMessage = async (args, context) => {


    if (args.messageInput.sendTo && args.messageInput.sendFrom && args.messageInput.text) {

        let Obj = {};
        let Obj_ = {};
        if (args.messageInput.role == "patient") {
            Obj['userId'] = mongoose.Types.ObjectId(args.messageInput.sendFrom);
            Obj['practionerId'] = mongoose.Types.ObjectId(args.messageInput.sendTo);
            Obj_['sendFrom'] = mongoose.Types.ObjectId(args.messageInput.sendFrom);
            Obj_['sendTo'] = mongoose.Types.ObjectId(args.messageInput.sendTo);
        }
        if (args.messageInput.role == "practioner") {
            Obj['userId'] = mongoose.Types.ObjectId(args.messageInput.sendTo)
            Obj['practionerId'] = mongoose.Types.ObjectId(args.messageInput.sendFrom)
            Obj_['sendFrom'] = mongoose.Types.ObjectId(args.messageInput.sendFrom);
            Obj_['sendTo'] = mongoose.Types.ObjectId(args.messageInput.sendTo);
        }
        let arg = {
            query: {
                // sendTo: mongoose.Types.ObjectId(args.messageInput.sendTo),
                // sendFrom: mongoose.Types.ObjectId(args.messageInput.sendFrom),
                text: args.messageInput.text,
                ...Obj,
                ...Obj_
            }
        }
        console.log(arg)
        let messageData = await genericFunctions._basePost(Message, arg.query)
        if (!messageData.status)
            return { status: false, statusCode: 203, message: messageData.error }
        if (messageData.data) {
            let addMessageList = await genericFunctions._baseFetch(messagelistSchema, { query: Obj_ }, 'FindOne');
            console.log(addMessageList)
            if (addMessageList.data) {
                return { status: true, statusCode: 200, message: "Message Send" }
            } else {
                let addMessageList = await genericFunctions._basePost(messagelistSchema, arg.query)
                console.log(addMessageList)
                if (!addMessageList.status) {
                    return { status: false, statusCode: 203, message: "Message Not Send" }
                }
                return { status: true, statusCode: 200, message: "Message Send" }
            }
        }
        return { status: false, statusCode: 203, message: "Message Not Send" }
    }
    else {
        return { status: false, statusCode: 203, message: "please fill all the fields" }
    }

}

exports.getMessageList = async (args, context) => {

    if (args.loginUserId) {
        console.log(args.loginUserId)
        let matchObj = {};
        matchObj['sendTo'] = mongoose.Types.ObjectId(args.loginUserId);
        let arg = {
            query: [
                {
                    $match: { ...matchObj },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "sendFrom",
                        foreignField: "_id",
                        as: "userData"
                    }
                },
                { $unwind: "$userData" },

                {
                    $project: {
                        sendTo: 1,
                        sendFrom: 1,
                        firstName: "$userData.firstName",
                        lastName: "$userData.lastName",
                    }
                }
            ],
        }
        let messageList = await genericFunctions._baseFetch(messagelistSchema, arg, "Aggregate")
        console.log(messageList)
        return messageList.data
    }
}

exports.getparticularUserMessageList = async (args, context) => {

    console.log(args.practionerId, args.userId)
    if (args.practionerId && args.userId) {

        let matchObj = {};
        matchObj['practionerId'] = mongoose.Types.ObjectId(args.practionerId);
        matchObj['userId'] = mongoose.Types.ObjectId(args.userId);
        console.log(matchObj)
        let arg = {
            query: [
                {
                    $match: { ...matchObj },
                },
                // {
                //     $lookup: {
                //         from: "users",
                //         localField: "sendFrom",
                //         foreignField: "_id",
                //         as: "userData"
                //     }
                // },
                // { $unwind: "$userData" },
                // {
                //     $lookup: {
                //         from: "practionerschemas",
                //         localField: "sendTo",
                //         foreignField: "userData.userId",
                //         as: "practionarData"
                //     }
                // },
                // { $unwind: "$practionarData" },
                // {
                //     $project: {
                //         text: 1,
                //         sendingTime: 1,
                //         userId: "$userData._id"
                //     }
                // }
            ],
        }
        console.log(arg.query[0].$match)
        let messageList_ = await genericFunctions._baseFetch(Message, arg, "Aggregate")
        console.log(messageList_)
        return messageList_.data
    }


}

// exports.fetchCategory = async () => {



// }


// exports.updateCategory = async () => {

// }


// exports.deleteCategory = async () => {

// }