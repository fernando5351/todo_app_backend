const router = require('express').Router();

const roleRouter = require('./roleRouter');
const userRouter = require('./userRouter');
const AuthRouter = require('./authRouter');

function setupRoutes(app){
    app.use('/api/v1', router);

    router.use('/role', roleRouter)
    router.use('/user', userRouter);
    router.use('/auth', AuthRouter);
}

module.exports = setupRoutes;