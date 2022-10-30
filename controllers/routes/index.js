const express = require('express');

const empleadoRouter = require('./empleado.router');


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/empleado', empleadoRouter);
}
module.exports = routerApi;