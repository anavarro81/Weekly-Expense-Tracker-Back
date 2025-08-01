
// Controlador de autenticación: gestiona el registro y login de usuarios
import * as authService from '../services/auth.service'
import { Request, Response, NextFunction } from 'express';
import {validateUserRegister, validateUserLogin, ValidationResult} from '../utils/validator' 

/**
 * Controlador para el registro de usuario.
 * - Valida los datos recibidos en el body.
 * - Si la validación falla, responde con error 400 y detalles.
 * - Si es correcto, llama al servicio para crear el usuario y responde con el usuario creado.
 */
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {    
    try {
        // Extrae los datos del body
        const userData = req.body
        // Valida los datos de registro
        const validUser = validateUserRegister(userData)       
        
        if (!validUser.valid) {
            // Si la validación falla, responde con error y detalles
            res.status(400).json({message: "Datos del usuario incorrectos", error: validUser.errors})
        }
        // Si la validación es correcta, crea el usuario
        const createdUser = await authService.register(userData)
        res.status(201).json({createdUser})
    } catch (error: any) {
        next(error)
    }
}

/**
 * Controlador para el login de usuario.
 * - Valida los datos recibidos en el body.
 * - Si la validación falla, responde con error 400 y detalles.
 * - Si es correcto, llama al servicio para autenticar y responde con el usuario y token.
 */
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 
    try {
        // Extrae los datos del body
        const userData = req.body
        // Valida los datos de login
        const validUser = validateUserLogin(userData)       
        
        if (!validUser.valid) {
            // Si la validación falla, responde con error y detalles
            res.status(400).json({message: "Datos del usuario incorrectos", error: validUser.errors})
        }
        // Si la validación es correcta, autentica y genera token
        const userInfo = await authService.login(userData)
        res.status(200).json({userInfo})
    } catch (error: any) {
        next(error)
    }
}