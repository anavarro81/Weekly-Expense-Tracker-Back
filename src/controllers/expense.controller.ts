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

export const newExpense = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 

    
    try {
        const newExpense = await expenseService.newExpense(req.body)    
        console.log('newExpense = ', newExpense)
        res.status(201).json(newExpense)    
    } catch (error: any) {
        next(error)
    }

}

export const editExpense = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 

        try {

            const {id} = req.params;
            const expenseData = req.body

        const newExpense = await expenseService.editExpense(id, expenseData)    
        console.log('newExpense = ', newExpense)
        res.status(201).json(newExpense)    
    } catch (error: any) {
        next(error)
    }

}

export const deleteExpense = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 

        try {
        const {id} = req.params;
        const deleteExpense = await expenseService.deleteExpense (id)            
        res.status(200).json(deleteExpense)    
    } catch (error: any) {
        next(error)
    }

}
