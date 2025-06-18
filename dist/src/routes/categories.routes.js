"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_controller_1 = require("../controllers/categories.controller");
const categoryRoute = express_1.default.Router();
categoryRoute.post('/', categories_controller_1.newCategory);
categoryRoute.post('/loadcategories', categories_controller_1.loadCategories);
exports.default = categoryRoute;
