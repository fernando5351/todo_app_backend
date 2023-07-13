const express = require('express');
const port = process.env.PORT || 3000;
const setupRoutes =  require('./routes')
const { boomErrorHandler, logErrors, errorHandler, ormErrorHandler } = require('../middlewares/errorHandler'); 

const app = express();

app.set('port', port);
app.use(express.json());

require('./utils/auth');
app.get('/', async(req, res)=>{
    res.json({
        saludo: "hola como estas"
    });
});

setupRoutes(app);

// middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;
