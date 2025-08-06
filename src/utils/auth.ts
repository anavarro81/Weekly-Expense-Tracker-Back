
// Utilidades de autenticación
// Este archivo contiene funciones para el manejo seguro de contraseñas usando bcrypt
import bcrypt from 'bcrypt';
import { Request } from 'express';
import {verifySign} from '../utils/jwt'

/**
 * Hashea una contraseña usando bcrypt.
 * - Genera un salt aleatorio con 10 rondas.
 * - Devuelve la contraseña cifrada lista para almacenar en base de datos.
 * @param password Contraseña en texto plano
 * @returns Contraseña cifrada
 */
export const hashpassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export const getUserID = async (req: Request): Promise<string> => {
    
    const token = req.headers?.authorization?.split(' ')[1];
    
    if (!token) {
        throw new Error('No existe el token; Usuario no autorizado');
    }

    const userId = verifySign(token)
    
    return userId
}