const express = require('express');
const port = process.env.PORT || 3000;
const setupRoutes =  require('./routes')
const { boomErrorHandler } = require('../middlewares/errorHandler');

const app = express();

app.set('port', port);
app.use(express.json());

app.get('/', async(req, res)=>{
    res.json({
        saludo: "hola como estas"
    });
});

setupRoutes(app);

app.use(boomErrorHandler)

module.exports = app;
