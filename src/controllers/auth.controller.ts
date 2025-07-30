import * as authService from '../services/auth.service'
import { Request, Response, NextFunction } from 'express';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {    

    try {

        const userData = req.body
        const validUser = await authService.register(userData)

        if (validUser.valid) {
            res.status(201).json({message: "Usuario correcto"})
        } else {
            res.status(400).json({message: "Datos del usuario incorrectos", error: validUser. errors})
        }
        
        
    } catch (error: any) {
        next(error)
    }

}