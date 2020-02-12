

const Category = require('../../../models/category/categorySchema'),
    genericFunctions = require('../../../helpers/util-genricfunctions');





//==============================================================//
//---------------------------CATEGORY METHODS------------------//
//=============================================================//

exports.createCategory = async () => {

    if (args.categoryInput.categoryName) {
        let cartegory = await genericFunctions._basePost(Category, { query: { categoryName: args.categoryInput.categoryName } });
        console.log(cartegory)
    } else {
        return { status: false, statusCode: 203, message: "please fill all the fields", }

    }

}

exports.fetchCategory = async () => {

    let matchObj = {};
    let params = {
        query: {
            ...matchObj, isDelete: false
        }
    }
    let category = await genericFunctions._baseFetch(Category, params);

    if (!category.status) {
        if (category.error['code'] == 11000)
            return { status: false, statusCode: 203, message: 'user already exist', userId: '', email: '', token: '' }
        return { status: false, statusCode: 203, message: category.error, userId: '', email: '', token: '' }
    }

    return category.data

}


exports.updateCategory = async () => {

}


exports.deleteCategory = async () => {

}