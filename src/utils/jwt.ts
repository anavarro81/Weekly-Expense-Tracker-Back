
// Utilidades para manejo de JSON Web Tokens (JWT)
// Este archivo permite generar y verificar tokens para autenticación y autorización
import jwt from "jsonwebtoken"

// Crea una interfaz personalizado a partir JwtPayload y le agrego el id de usuario
export interface myJwtPayload extends jwt.JwtPayload{
    id: string;
}

/**
 * Genera un token JWT firmado con la clave secreta.
 * - Incluye el id y el email en el payload.
 * - El token expira en 1 hora.
 * @param id Identificador del usuario
 * @param email Email del usuario
 * @returns Token JWT
 */
export const generateSign = (id: string, email: string) => {
    if (!process.env.JWT_KEY) {
        throw new Error ('Clave para JWT no informada')
    }
    return jwt.sign({id, email}, process.env.JWT_KEY, {expiresIn: "1h"})
}


/**
 * Verifica y decodifica un token JWT usando la clave secreta.
 * - Si la clave no está informada, lanza un error.
 * - Si el token es válido, devuelve el payload decodificado.
 * @param token Token JWT a verificar
 * @returns Payload decodificado (string o JwtPayload)
 */
export const verifySign = (token: string): string  => {
    if (!process.env.JWT_KEY) {
        throw new Error ('Clave para JWT no informada')
    }

    // Aserción de tipo. Le dice a TS que trate el valor que me devuelve jwt.verify como si fuera un objeto con la forma de MyJwtPayload
    const payload = jwt.verify(token, process.env.JWT_KEY) as myJwtPayload 

    // Devuelve el id del usuario. 
    return payload.id


    
}