const router = require('express').Router();
const passport = require('passport');
const validatorHandler =  require('../../middlewares/validatorHandler');
const { login } = require('../schemas/userSchema');
const AuthService = require('../services/authService');

const service = new AuthService();

router.post('/login',
    validatorHandler(login, 'body'),
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            const { user } = req;
            const userSing = await service.signToken(user);
            res.status(200).json({
                codeStatus: 200,
                message: 'user fetched',
                ...userSing
            })
        } catch (error) {
            next(error);
        }
    }
)

module.exports = router;