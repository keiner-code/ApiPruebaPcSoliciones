function errorHandler(error, request, response, next) {
    response.status(500).json({
        message: error.message,
        stack: error.stack,
    });
    next(error);
}
module.exports = errorHandler;