const { default: slugify } = require("slugify")
const productModel = require("../models/productModel")
const fs = require('fs')

const CREATE_PRODUCT = async (req, res, next) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields
        const { photo } = req.files
        //VALIDATION
        switch (true) {
            case !name:
                return res.send({ error: 'Name is required ' })
            case !description:
                return res.send({ error: 'Description is required ' })
            case !price:
                return res.send({ error: 'Price is required ' })
            case !category:
                return res.send({ error: 'Category is required ' })
            case !quantity:
                return res.send({ error: 'Quantity is required ' })
            case !photo && photo.size < 1000000:
                return res.send({ error: 'Photo is Required should be less than 1mb' })
        }
        const product = new productModel({ ...req.fields, slug: slugify(name) })
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }
        await product.save()
        res.status(200).json({
            success: true,
            message: 'Product created successfully',
            product: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating product",
            error: error.message
        })
    }
}

const GET_ALL_PRODUCTS = async (req, res, next) => {
    try {
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({ createdAt: -1 })
        return res.status(200).json({
            success: true,
            message: 'All products fetched successfully',
            products: products,
            countTotal: products.length
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in fetching products",
            error: error.message
        })
    }
}

const GET_SINGLE_PRODUCT = async (req, res, next) => {
    try {
        const product = await productModel.findOne({ slug: req.params.slug }).select('-photo').populate('category')
        return res.status(200).json({
            success: true,
            message: 'Single product fetched successfully',
            product: product
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in fetching single products",
            error: error.message
        })
    }
}

const GET_PRODUCT_PHOTO = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.pid).select('photo')
        if (product.photo.data) {
            res.set('Content-Type', product.photo.contentType)
            console.log(product.photo)
            return res.status(200).send(product.photo.data)
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in fetching product photo",
            error: error.message
        })
    }
}

const DELETE_PRODUCT = async (req, res, next) => {
    try {
        await productModel.findByIdAndDelete(req.params.pid).select('-photo')
        return res.status(200).json({
            success: true,
            message: 'Product Deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Deleting product",
            error: error.message
        })
    }
}

const UPDATE_PRODUCT = async (req, res, next) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields
        const { photo } = req.files
        //VALIDATION
        switch (true) {
            case !name:
                return res.send({ error: 'Name is required ' })
            case !description:
                return res.send({ error: 'Description is required ' })
            case !price:
                return res.send({ error: 'Price is required ' })
            case !category:
                return res.send({ error: 'Category is required ' })
            case !quantity:
                return res.send({ error: 'Quantity is required ' })
            case !photo && photo.size < 1000000:
                return res.send({ error: 'Photo is Required should be less than 1mb' })
        }
        const product = await productModel.findByIdAndUpdate(req.params.pid,
            { ...req.fields, slug: slugify(name) },
            { new: true }
        )
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }
        await product.save()
        res.status(200).json({
            success: true,
            message: 'Product Updated successfully',
            product: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Updating product",
            error: error.message
        })
    }
}

module.exports = {
    CREATE_PRODUCT,
    GET_ALL_PRODUCTS,
    GET_SINGLE_PRODUCT,
    GET_PRODUCT_PHOTO,
    DELETE_PRODUCT,
    UPDATE_PRODUCT
}