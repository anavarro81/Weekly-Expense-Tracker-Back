"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    console.error(`Error: ${error.message}, path: ${req.path} stack: ${error.stack}`);
    res.status(500).json({ message: 'Error en el servidor' });
};
exports.errorHandler = errorHandler;
