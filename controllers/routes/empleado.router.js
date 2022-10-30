const express = require('express');
const router = express.Router();
const EmpleadoService = require('../../models/services/empleado.service');

const empleadoService = new EmpleadoService();

router.get('/',(request,response, next) => {
   try {
        empleadoService.find((content) => {
        response.json(content);
    });
   } catch (error) {
        next(error);
   }
});
router.get('/:id', (request, response,next) => {
    try {
        const id = request.params.id;
        empleadoService.findOne(id, (content) => {
        if(content[0]){
            response.json(content[0]);
        }else{
            response.json(`El Id Numero ${id} No Existe En La Base De Datos`);
        }
    });
    } catch (error) {
        next(error);
    }
});
router.post('/',(request,response,next) => {
    try {
        const body = request.body;
        empleadoService.create(body, (result) => {
        response.json({id: result.insertId});
    });
    } catch (error) {
        next(error);
    }
});
router.put('/:id', (request,response,next) => {
    try {
        const body = request.body;
        const id = request.params.id;
        empleadoService.update(id,body,(result) => {
        response.json(result.info);
    });
    } catch (error) {
        next(error);
    }
});
router.delete('/:id', (request,response,next) => {
    try {
        const id = parseInt(request.params.id,10);
        empleadoService.delete(id, (result) => {
        response.json(`Remove Exit ${result.affectedRows} Element`);
    });
    } catch (error) {
        next(error);
    }
});
module.exports = router;