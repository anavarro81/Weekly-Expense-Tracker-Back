import * as settingService from '../services/setting.service'
import * as categoriesService from '../services/category.service'
import * as expensesService from '../services/expense.service'
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
                res.status(400).json({"error": "Usuario no autorizado"} )
                return
            }        
            
            const userId = verifySign(token)
            

            const [weeklyLimit, categories, expenses, numExpenses] = await Promise.all([
            settingService.getLimit(),
            categoriesService.getAllCategoriesService(),
            expensesService.getExpenses(options, userId),
            expensesService.countExpenses()
    ]);


            
            res.status(200).json({weeklyLimit, categories, expenses, numExpenses})
    
    } catch (error: any) {
        next(error)        
    }

}