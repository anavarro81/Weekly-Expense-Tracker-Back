import {Request, Response, NextFunction} from 'express'

export const errorHandler = (error: any, req: Request, res: Response, next:NextFunction) => {

    // Es buena práctica registrar el error completo en la consola para depuración
    console.error(error);

    let status = error.status || 500
    let message = error.message || "Error en el servidor"

    // Se personaliza alguno de los errores mas comunes de Mongoose, preguntando por su name.
    // Validacion de datos de Mongoose
    if (error.name === 'ValidationError') {
        status = 400;
        message = Object.values(error.errors).map((err: any) => err.message).join(', ');
    }

    if (error.name === 'CastError') {
        status = 400; // Bad Request
        message = `Invalid value '${error.value}' for field '${error.path}'`;
    }

  // MongoDB duplicate key error (code 11000 is for duplicates)
    if (error.code === 11000) {
        status = 409; // Conflict
        const field = Object.keys(error.keyValue)[0];
        const value = error.keyValue[field];
        message = `Duplicate key error: The value '${value}' already exists for field '${field}'.`;
    }
    
    res.status(status).json({error: message} )
}

