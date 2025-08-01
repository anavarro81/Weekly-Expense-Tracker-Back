
// Middleware de autenticación para rutas protegidas
// Verifica la validez del token JWT en la cabecera Authorization
import { Request, Response, NextFunction } from 'express';
import {verifySign} from '../utils/jwt'


/**
 * Middleware que protege rutas verificando el token JWT.
 * - Extrae el token de la cabecera Authorization.
 * - Si no existe el token, lanza error.
 * - Si el token es inválido o expirado, responde con 401.
 * - Si el token es válido, permite continuar con la petición.
 */
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Extrae el token de la cabecera Authorization (formato: Bearer <token>)
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        throw new Error ('No existe el Token')
    }
    try {
        // Verifica el token usando la función utilitaria
        const decoded = verifySign(token);
        if (!decoded) {
            // Si el token no es válido, responde con 401
            res.status(401).json({ message: "Token inválido o expirado" });
        }
    } catch (error) {
        // Si ocurre un error al verificar, responde con 401
        res.status(401).json({ message: "Token inválido o expirado" });
    }
    // Si todo es correcto, continúa con la siguiente función/middleware
    next();
}