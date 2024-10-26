const { SIGNUP_NEW_USER, LOGIN_USER, TEST_CONTROLLER } = require('../controller/authController');
const { TokenShield, AuthorizationShield } = require('../middleware/Middleware');

const authRouter = require('express').Router();

authRouter.post('/signup', SIGNUP_NEW_USER);
authRouter.post('/login', LOGIN_USER)
authRouter.get('/test',TokenShield, AuthorizationShield, TEST_CONTROLLER)

module.exports = authRouter;