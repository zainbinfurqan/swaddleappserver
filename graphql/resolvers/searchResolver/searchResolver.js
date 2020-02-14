

const categoryModel = require('../../../models/category/categorySchema'),
    practionerModel = require('../practionerResolver/practionerResolver'),
    genericFunctions = require('../../../helpers/util-genricfunctions');



//==============================================================//
//---------------------------SEARCH METHODS-------------------//
//=============================================================//


exports.searchCategory = async (args, context) => {

    try {
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
        if (categoryData) {
            return categoryData
        } else {
            return categoryData
        }
    } catch (err) {
        throw err
    }
}

exports.searchProviderWithCategory = async (arg, context) => {

    if (arg.searchInput.categoryId) {
        let args = {
            query: {
                catgoryId: arg.searchInput.categoryId
            }
        }
        let searchProvider = await genericFunctions._baseFetch(practionerModel, args,'Aggregate')
    } else {
        return { status: false, statusCode: 200, message: 's' }
    }

}