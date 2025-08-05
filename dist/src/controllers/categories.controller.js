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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = exports.loadCategories = exports.newCategory = void 0;
const newCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCategoryData = req.body;
        if (!newCategoryData || Object.keys(newCategoryData).length === 0) {
            res.status(400).json({ message: "nombre de categoria no informaado" });
        }
        const createdCategory = yield categoryService.createCategory(newCategoryData);
        res.status(201).json(createdCategory);
    }
    catch (error) {
        next(error);
    }
});
exports.newCategory = newCategory;
const loadCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdCategories = yield categoryService.loadCategories(req.body);
        res.status(201).json(createdCategories);
    }
    catch (error) {
        next(error);
    }
});
exports.loadCategories = loadCategories;
const getAllCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoryService.getAllCategoriesService();
        res.status(200).json(categories);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCategories = getAllCategories;
