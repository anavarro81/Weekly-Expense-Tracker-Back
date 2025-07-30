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
exports.register = void 0;
const validator_1 = require("../utils/validator");
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const validUser = (0, validator_1.validateUserRegister)(userData);
    return validUser;
    // try {
    //     // Crea una instancia del modelo y la guarda en la base de datos. 
    //     const savedCategory = await CategoryModel.create(categoryData);        
    //     return savedCategory
    // } catch (error) {
    //     console.error('Error en el registro de usuario', error); 
    //     throw error;
    // }
});
exports.register = register;
