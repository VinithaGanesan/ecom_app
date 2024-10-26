const Usermodel = require('../models/userModel')

const jwt = require('jsonwebtoken');

const TokenShield = async (req, res, next) => {
    try {
        const decodedToken = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        if (decodedToken) {
            req.user = decodedToken;
            next();
        } else {
            return res.status(401).send({
                success: false,
                message: 'Token missing or expired'
            })
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message,
        })
    }
}

const AuthorizationShield = async (req, res, next) => {
    try {
        const User = await Usermodel.findById(req.user._id);
        if (User.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access",
                data: User
            })
        } else {
            next();
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error,
            message: 'Error in Admin Middleware'
        })
    }
}

module.exports = {
    AuthorizationShield,
    TokenShield
}

