import express from "express";
import {
    loadExpenses,
    getExpenses
} from '../controllers/expense.controller'

const expenseRoute = express.Router();
expenseRoute.post('/load-expenses', loadExpenses);
expenseRoute.get('/', getExpenses);

export default expenseRoute;