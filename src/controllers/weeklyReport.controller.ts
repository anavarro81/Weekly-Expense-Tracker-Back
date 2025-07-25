import * as settingService from '../services/setting.service'
import * as categoriesService from '../services/category.service'
import * as expensesService from '../services/expense.service'
import { Request, Response, NextFunction } from 'express';

export const getWeeklyReport = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    

    try {

            const options = {
            page: 1,
            limit: 5
            }

            const [weeklyLimit, categories, expenses, numExpenses] = await Promise.all([
            settingService.getLimit(),
            categoriesService.getAllCategoriesService(),
            expensesService.getExpenses(options),
            expensesService.countExpenses()
    ]);


            
            res.status(200).json({weeklyLimit, categories, expenses, numExpenses})
    
    } catch (error: any) {
        next(error)        
    }

}