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
exports.updateSetting = exports.getUserData = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getUserData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById(id);
        console.log('user ', user);
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.getUserData = getUserData;
// Los parametros limite y categorias son opcionales. Puede actulizarse a la vez uno o los dos.  
const updateSetting = (id, limit, categories) => __awaiter(void 0, void 0, void 0, function* () {
    const updateFields = {};
    if (limit !== undefined)
        updateFields.weeklylimit = limit;
    if (categories !== undefined)
        updateFields.categories = categories;
    if (Object.keys(updateFields).length == 0) {
        throw new Error('No se ha mandado ningun dato para actualizar');
    }
    try {
        const updatedUser = yield user_model_1.default.findByIdAndUpdate(id, { $set: updateFields }, 
        // Si actualiza el documento devuelve una copia con los nuevos datos. 
        { new: true });
        return updatedUser;
    }
    catch (error) {
        throw error;
    }
});
exports.updateSetting = updateSetting;
//# sourceMappingURL=user.service.js.map