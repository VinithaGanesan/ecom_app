const { CREATE_CATEGORY, UPDATE_CATEGORY, ALL_CATEGORY, SINGLE_CATEGORY, DELETE_CATEGORY } = require('../controller/categoryController');
const { TokenShield, AuthorizationShield } = require('../middleware/Middleware');

const categoryRoute = require('express').Router();

//routes
categoryRoute.post('/create-category', TokenShield, AuthorizationShield, CREATE_CATEGORY);
categoryRoute.put('/update-category/:id', TokenShield, AuthorizationShield, UPDATE_CATEGORY);
categoryRoute.get('/get-category', ALL_CATEGORY);
categoryRoute.get('/single-category/:slug', SINGLE_CATEGORY);
categoryRoute.delete('/delete-category/:id', TokenShield, AuthorizationShield, DELETE_CATEGORY);

module.exports = categoryRoute;