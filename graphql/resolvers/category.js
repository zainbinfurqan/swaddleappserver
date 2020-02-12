const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CategoryModel = require('../../models/category');
const { transformCategory } = require('./merge');

const { JWT_SECRET } = require('../../helpers/constants');


module.exports = {
    createCategory: async args => {
        try {
            const category = new CategoryModel({
                categoryName: args.categoryInput.categoryName,
            });
            const result = await category.save();
            // ashedPassword = await bcrypt.hash(args.userInput.password, 12);
            return { _id: result._id, categoryName: result.categoryName, };
        } catch (err) {
            if (err['code'] == 11000) {
                throw { response: 'data already exsist' };
            }
            else {
                throw err
            }
        }
    },
    getCategory: async args => {
        try {
            let matchObj = {};
            // if (args.categoryInput.search) {
            //     matchObj['categoryName'] = { $regex: new RegExp(args.categoryInput.search, 'i') }
            // }
            let params = {
                query: {
                    ...matchObj, isDelete: false
                }
            }
            const categoryData = await CategoryModel.find(params.query);
            console.log(categoryData)
            return categoryData.map(categoryData => transformCategory(categoryData)).reverse();
        } catch (err) {
            throw err
        }
    },

    searchCategory: async args => {
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
            const categoryData = await CategoryModel.find(params.query);
            // console.log(categoryData)
            return categoryData.map(categoryData => transformCategory(categoryData)).reverse();
        } catch (err) {
            throw err
        }
    }
};
