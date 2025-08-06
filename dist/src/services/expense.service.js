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
exports.deleteExpense = exports.countExpenses = exports.editExpense = exports.newExpense = exports.getExpenses = exports.loadExpenses = void 0;
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
const getExpenses = (options, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = options;
        const expenses = yield expense_model_1.default.find({ userId: id })
            .select('date concept category amount') // Select only the fields you need
            .skip((page - 1) * limit) // Skip the documents for pagination
            .limit(limit) // Limit the number of documents returned
            .sort({ date: -1, _id: 1 }); // Sort by date and id. 
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
const editExpense = (id, expenseData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, concept, category, amount } = expenseData;
        const editedExpense = yield expense_model_1.default.findByIdAndUpdate(id, {
            $set: {
                date: date,
                concept: concept,
                category: category,
                amount: amount
            },
        }, { new: true });
        if (!editedExpense) {
            throw new Error('Error al actualizar el gasto');
        }
        return editedExpense;
    }
    catch (error) {
        throw error;
    }
});
exports.editExpense = editExpense;
const countExpenses = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numExpenses = yield expense_model_1.default.countDocuments({ userId });
        console.log('numExpenses : ', numExpenses);
        return numExpenses;
    }
    catch (error) {
        throw error;
    }
});
exports.countExpenses = countExpenses;
const deleteExpense = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedExpense = yield expense_model_1.default.findByIdAndDelete(id);
        if (!deletedExpense) {
            throw new Error('Error al borrar el gasto');
        }
        return deletedExpense;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteExpense = deleteExpense;
//# sourceMappingURL=expense.service.js.map