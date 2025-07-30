import * as authService from '../services/auth.service'
import { Request, Response, NextFunction } from 'express';
import {validateUserRegister, validateUserLogin, ValidationResult} from '../utils/validator' 

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {    

    try {

        const userData = req.body
        const validUser = validateUserRegister(userData)       
        
        if (!validUser.valid) {
            res.status(400).json({message: "Datos del usuario incorrectos", error: validUser. errors})
        }
        
        const createdUser = await authService.register(userData)
        res.status(201).json({createdUser})
        
        
    } catch (error: any) {
        next(error)
    }

}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 

        const userData = req.body
        const validUser = validateUserLogin(userData)       
        
        if (!validUser.valid) {
            res.status(400).json({message: "Datos del usuario incorrectos", error: validUser. errors})
        }

        const userInfo = await authService.login(userData)
        res.status(200).json({userInfo})
        


}