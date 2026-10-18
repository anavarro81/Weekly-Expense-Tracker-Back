

import * as expensesService from '../services/expense.service'
import * as userServices from '../services/user.service'

import { Request, Response, NextFunction } from 'express';
import {verifySign} from '../utils/jwt'
export const getWeeklyReport = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    

    try {

            const options = {
            page: 1,
            limit: 5
            }

            const token = req.headers?.authorization?.split(' ')[1];

            
            
            if (!token) {
                console.error("Usuario no autorizado: token no proporcionado");
                res.status(401).json({"error": "Usuario no autorizado"} )
                return
            }        
            try {
               const userId = verifySign(token)    
            } catch (jwtError: any) {

                if (jwtError.message.includes('Token expirado')) {
                res.status(401).json({error: "Token expirado"});
                return;
            }
            if (jwtError.message.includes('Token inválido')) {
                res.status(401).json({error: "Token inválido"});
                return;
            }
            throw jwtError;
                
            }
            
            

            //const [weeklyLimit, expenses, numExpenses] = await Promise.all([
            const [userData, expenses, numExpenses] = await Promise.all([
            // TODO Actualizar el limite con el limite del usuario
                // settingService.getLimit(),
            userServices.getUserData(userId),                
            expensesService.getExpenses(options, userId),
            expensesService.countExpenses(userId)
    ]);


            res.status(200).json({userData, expenses, numExpenses})
            // res.status(200).json({weeklyLimit, expenses, numExpenses})
    
    } catch (error: any) {
        next(error)        
    }

}