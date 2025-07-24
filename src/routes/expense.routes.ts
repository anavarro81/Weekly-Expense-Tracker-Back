import express from "express";
import {
    loadExpenses,
    getExpenses, 
    newExpense,
    editExpense
} from '../controllers/expense.controller'

const expenseRoute = express.Router();
expenseRoute.post('/load-expenses', loadExpenses);
expenseRoute.get('/', getExpenses);
expenseRoute.post('/', newExpense);
expenseRoute.put('/:id', editExpense)
export default expenseRoute;