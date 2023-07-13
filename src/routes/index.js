const router = require('express').Router();

const roleRouter = require('./roleRouter');
const userRouter = require('./userRouter');

function setupRoutes(app){
    app.use('/api/v1', router);

    router.use('/role', roleRouter)
    router.use('/user', userRouter);
}

module.exports = setupRoutes;