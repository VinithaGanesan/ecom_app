const categoryModel = require('../models/categoryModel');
const slugify = require('slugify')


const CREATE_CATEGORY = async (req, res, next) => {
    try {
        const { name } = req.body;
        //  VALIDATE INPUT
        if (!name) {
            return res.send({
                success: false,
                message: "Name is required"
            })
        }
        //CHECK EXISTING CATEGORY
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).json({
                success: false,
                message: 'Category already exists'
            })
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        return res.status(200).json({
            success: true,
            message: 'New Category created successfully',
            category: category
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating category",
            error: error.message
        })
    }
}

const UPDATE_CATEGORY = async (req, res, next) => {
    try {
        const { name } = req.body
        const { id } = req.params;
        // FIND CATEGORY AND UPDATE BY NAME AND ID FROM PARAMS
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        return res.status(200).json({
            success: true,
            message: "Category Updated Successfully",
            category: category,
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in updating category",
            error: error.message
        })
    }
}

const ALL_CATEGORY = async (req, res, next) => {
    try {
        const category = await categoryModel.find({})
        return res.status(200).json({
            success: true,
            message: 'All categories fetched',
            category: category
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in fetching all categories",
            error: error.message
        })
    }
}

const SINGLE_CATEGORY = async (req, res, next) => {
    try {
        const category = await categoryModel.findOne({ slug: req.params.slug })
        return res.status(200).json({
            success: true,
            message: 'Single category fetched successfully',
            category: category
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in fetching single category",
            error: error.message
        })
    }
}

const DELETE_CATEGORY = async (req, res, next) => {
    try {
        const { id } = req.params;
        await categoryModel.findOneAndDelete(id)
        return res.status(200).json({
            success: true,
            message: 'Category deleted successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting category",
            error: error.message
        })
    }
}

module.exports = {
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    ALL_CATEGORY,
    SINGLE_CATEGORY,
    DELETE_CATEGORY
}