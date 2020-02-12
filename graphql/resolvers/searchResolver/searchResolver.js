

const categoryModel = require('../../../models/category/categorySchema');




//==============================================================//
//---------------------------SEARCH METHODS-------------------//
//=============================================================//


exports.searchCategory = async (args, context) => {

    try {
        console.log(args)
        let matchObj = {};
        if (args.search) {
            matchObj['categoryName'] = { $regex: new RegExp(args.search, 'i') }
        }
        let params = {
            query: {
                ...matchObj, isDelete: false
            }
        }
        const categoryData = await categoryModel.find(params.query);
        console.log(categoryData)
        return categoryData
        // return categoryData.map(categoryData => transformCategory(categoryData)).reverse();
    } catch (err) {
        throw err
    }

}