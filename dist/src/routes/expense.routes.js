"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_controller_1 = require("../controllers/expense.controller");
const expenseRoute = express_1.default.Router();
expenseRoute.post('/load-expenses', expense_controller_1.loadExpenses);
expenseRoute.get('/', expense_controller_1.getExpenses);
expenseRoute.post('/', expense_controller_1.newExpense);
expenseRoute.put('/:id', expense_controller_1.editExpense);
exports.default = expenseRoute;
