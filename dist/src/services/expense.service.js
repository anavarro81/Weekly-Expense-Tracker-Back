"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newExpense = exports.getExpenses = exports.loadExpenses = void 0;
const expense_model_1 = __importDefault(require("../models/expense.model"));
const loadExpenses = (expenses) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('expenses ', expenses);
    try {
        const insertedExpenses = yield expense_model_1.default.insertMany(expenses);
        return insertedExpenses;
    }
    catch (error) {
        throw error;
    }
});
exports.loadExpenses = loadExpenses;
const getExpenses = (options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = options;
        const expenses = yield expense_model_1.default.find({})
            .select('date concept category amount') // Select only the fields you need
            .skip((page - 1) * limit) // Skip the documents for pagination
            .limit(limit) // Limit the number of documents returned
            .sort({ date: -1 }); // Sort by date in descending order 
        console.log('expenses ', expenses);
        return expenses;
    }
    catch (error) {
        throw error;
    }
});
exports.getExpenses = getExpenses;
const newExpense = (expense) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertedExpense = yield expense_model_1.default.create(expense);
        return insertedExpense;
    }
    catch (error) {
        throw error;
    }
});
exports.newExpense = newExpense;
