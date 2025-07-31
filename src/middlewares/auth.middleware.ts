import { Request, Response, NextFunction } from 'express';
import {verifySign} from '../utils/jwt'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        throw new Error ('No existe el Token')
    }
    
    try {
        
        const decoded = verifySign(token);

        if (!decoded) {
            res.status(401).json({ message: "Token inválido o expirado" });
        }

        
    } catch (error) {
        throw new Error ('Token inválido o expirado')
        
    }
    
    
    next();
}