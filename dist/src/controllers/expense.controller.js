"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newExpense = exports.getExpenses = exports.loadExpenses = void 0;
const expenseService = __importStar(require("../services/expense.service"));
const loadExpenses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('loadExpenses controller', req.body);
    try {
        const createdCategories = yield expenseService.loadExpenses(req.body);
        res.status(201).json(createdCategories);
    }
    catch (error) {
        next(error);
    }
});
exports.loadExpenses = loadExpenses;
const getExpenses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, limit = 5 } = req.query;
        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10)
        };
        const expenses = yield expenseService.getExpenses(options);
        res.status(200).json(expenses);
    }
    catch (error) {
        next(error);
    }
});
exports.getExpenses = getExpenses;
const newExpense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Estoy en new Expense');
    console.log('req.body', req.body);
    try {
        const newExpense = yield expenseService.newExpense(req.body);
        console.log('newExpense = ', newExpense);
        res.status(201).json(newExpense);
    }
    catch (error) {
        next(error);
    }
});
exports.newExpense = newExpense;
