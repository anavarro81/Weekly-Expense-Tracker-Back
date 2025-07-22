import * as expenseService from '../services/expense.service'
import { Request, Response, NextFunction } from 'express';

export const loadExpenses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {    
    
    console.log('loadExpenses controller', req.body)

    try {        
            const createdCategories = await expenseService.loadExpenses(req.body)
            res.status(201).json(createdCategories)
            
        
    } catch (error: any) {
        next(error)
        
    }

}

export const getExpenses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
   

    try {
        const { page = 1, limit = 5 } = req.query
        const options = {
            page: parseInt(page as string, 10),
            limit: parseInt(limit as string, 10)
        }
        
        const expenses = await expenseService.getExpenses(options)
        res.status(200).json(expenses)
        
    } catch (error: any) {
        next(error)
    }
}