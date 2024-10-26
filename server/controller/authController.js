const Usermodel = require("../models/userModel");
const secret = process.env.JWT_SECRET_KEY;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

const SIGNUP_NEW_USER = async (req, res, next) => {
    try {
        const { username, email, mobilenumber, password } = req.body;
        // CHECK VALIDATION FOR INPUTS
        if (!username) return res.send({ message: "Username is required" })
        if (!email) return res.send({ message: "Email is required" })
        if (!mobilenumber) return res.send({ message: "Mobile Number is required" })
        if (!password) return res.send({ message: "Password is required" })
        // CHECK WHETHER THE USER IS EXISTS
        const existingUser = await Usermodel.findOne({ email: req.body.email });

        if (existingUser) {
            res.status(200).json({
                success: false,
                message: "This user already exists! Try a new one",
                data: existingUser.email
            })
        }

        //GENERATE HASH PASSWORD
        if (password) {
            bcrypt.hash(password, saltRounds, async function (err, hash) {
                if (hash) {
                    //create new user and save hash password
                    const NEW_USER = new Usermodel({ ...req.body, password: hash });

                    //save the created user
                    const SAVE_USER = await NEW_USER.save();
                    return res.status(200).json({
                        success: true,
                        message: "Account Created successfully",
                        data: SAVE_USER,
                    })

                }
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating account",
            error: error.message
        })
    }
}

const LOGIN_USER = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //CHECK FOR VALIDATION
        if (!email || !password) {
            return res.status(200).json({
                success: false,
                message: 'Email or Password is required!'
            })
        }
        //FIND THE USER IN DB
        const user = await Usermodel.findOne({ email })
        // IF USER EXIST COMPARE THE PASSWORD AND GENERATE TOKEN
        if (user && user._id) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign(
                        {
                            role: user.role,
                            _id: user._id
                        },
                        secret,
                        { expiresIn: '10h' }
                    );
                    return res.status(200).json({
                        success: true,
                        message: "Account signIn successfull",
                        token: token,
                        data: user
                    });
                } else {
                    return res.status(200).json({
                        success: false,
                        message: "Password does not match! Please enter correct password"
                    })
                }
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "Account doesn't exists! Enter valid Email address",
                token: null
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in login user",
            error: error.message
        })
    }
}

const TEST_CONTROLLER = async (req, res, next) => {
    try {
        return res.send({
            message: 'Token verified'
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in test controller",
            error: error.message
        })
    }
}

module.exports = {
    SIGNUP_NEW_USER,
    LOGIN_USER,
    TEST_CONTROLLER
}

