import {Request, Response, NextFunction} from 'express'

export const errorHandler = (error: Error, req: Request, res: Response, next:NextFunction) => {

    console.error(`Error: ${error.message}, path: ${req.path} stack: ${error.stack}`)
    res.status(500).json({message: 'Error en el servidor'})
}

