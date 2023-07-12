const router = require('express').Router();

const userRouter = require('./userRouter');

function setupRoutes(app){
    app.use('/api/v1', router);

    router.use('/user', userRouter);
}

module.exports = setupRoutes;