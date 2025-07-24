"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExpenseSchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    concept: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
}, {
    timestamps: true,
});
const ExpenseModel = (0, mongoose_1.model)("Expense", ExpenseSchema);
exports.default = ExpenseModel;
