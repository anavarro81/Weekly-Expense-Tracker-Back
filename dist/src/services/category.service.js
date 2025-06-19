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
exports.getAllCategoriesService = exports.loadCategories = exports.createCategory = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const createCategory = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Crea una instancia del modelo y la guarda en la base de datos. 
        const savedCategory = yield category_model_1.default.create(categoryData);
        return savedCategory;
    }
    catch (error) {
        console.error('Error in createCategory service:', error);
        // Se relanza el error para preservar el tipo. 
        throw error;
    }
});
exports.createCategory = createCategory;
const loadCategories = (categories) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertedCategories = yield category_model_1.default.insertMany(categories);
        // Se usa asercicion para indicar al compilador que estamos seguros de que lo devuelto por Mongoose es del 
        // tipo ICategory
        return insertedCategories;
    }
    catch (error) {
        if (error.code === 11000) { // Código de error para duplicados
            console.error('¡Error de clave duplicada!');
            throw new Error('Nombre de categoria duplicada');
        }
        else {
            console.error('Error al insertar las categorias', error);
            throw error;
        }
    }
});
exports.loadCategories = loadCategories;
const getAllCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.default.find({});
        return categories;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllCategoriesService = getAllCategoriesService;
