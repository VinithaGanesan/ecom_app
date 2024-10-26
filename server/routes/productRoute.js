const { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, GET_PRODUCT_PHOTO, DELETE_PRODUCT, UPDATE_PRODUCT } = require('../controller/productController');
const { TokenShield, AuthorizationShield } = require('../middleware/Middleware');
const formidable = require('express-formidable')

const productRoute = require('express').Router();

productRoute.post('/create-product', TokenShield, AuthorizationShield, formidable(), CREATE_PRODUCT)
productRoute.get('/get-products', GET_ALL_PRODUCTS)
productRoute.get('/single-product/:slug', GET_SINGLE_PRODUCT)
productRoute.get('/product-photo/:pid', GET_PRODUCT_PHOTO)
productRoute.delete('/delete-product/:pid', TokenShield, AuthorizationShield, DELETE_PRODUCT)
productRoute.put('/update-product/:pid', TokenShield, AuthorizationShield, formidable(), UPDATE_PRODUCT)

module.exports = productRoute;