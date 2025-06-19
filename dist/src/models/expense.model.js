"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExpenseSchema = new mongoose_1.Schema({});
const ExpenseModel = (0, mongoose_1.model)("Expense", ExpenseSchema);
exports.default = ExpenseModel;
