const router = require('express').Router();
const teamRouter = require('./teamsRouter')
const roleRouter = require('./roleRouter');
const userRouter = require('./userRouter');
const AuthRouter = require('./authRouter');

function setupRoutes(app){
    // http://localhost:3000/api/v1/role
    app.use('/api/v1', router);
    router.use('/team', teamRouter);
    router.use('/role', roleRouter);
    router.use('/user', userRouter);
    router.use('/auth', AuthRouter);
}

module.exports = setupRoutes;