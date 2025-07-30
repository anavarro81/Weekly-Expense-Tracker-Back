import jwt from "jsonwebtoken"

export const generateSign = (id: string, email: string) => {
    
    if (!process.env.JWT_KEY) {
        throw new Error ('Clave para JWT no informada')
    }
    
    return jwt.sign({id, email}, process.env.JWT_KEY, {expiresIn: "1h"})
}