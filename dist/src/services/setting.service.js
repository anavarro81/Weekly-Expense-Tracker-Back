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
exports.updateLimitAmount = exports.getLimit = void 0;
const setting_model_1 = __importDefault(require("../models/setting.model"));
const getLimit = () => __awaiter(void 0, void 0, void 0, function* () {
    const settings = yield setting_model_1.default.findOne({});
    if (!settings) {
        throw new Error('No se ha encontrado configuracion');
    }
    return settings;
});
exports.getLimit = getLimit;
const updateLimitAmount = (id, limit) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('id del límite no definido ');
    }
    if (!limit || limit <= 0) {
        throw new Error(`El importe límite: ${limit} no es correcto`);
    }
    const updatedLimit = yield setting_model_1.default.findByIdAndUpdate(id, {
        $set: {
            limit: limit
        },
    }, { new: true });
    console.log('updatedLimit ', updatedLimit);
    if (!updatedLimit) {
        throw new Error('Error actualizando el importe límite');
    }
    return updatedLimit;
});
exports.updateLimitAmount = updateLimitAmount;
