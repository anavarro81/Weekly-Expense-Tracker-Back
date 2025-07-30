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
exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const auth_1 = require("../utils/auth");
const jwt_1 = require("../utils/jwt");
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, email, password } = userData;
        if (yield user_model_1.default.exists({ email })) {
            const conflict = new Error('El email ya está en uso');
            throw conflict;
        }
        const hashedPassword = yield (0, auth_1.hashpassword)(password);
        const newUser = yield user_model_1.default.create({ user, email, password: hashedPassword });
        return newUser;
    }
    catch (error) {
        throw error;
    }
});
exports.register = register;
const login = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = yield user_model_1.default.findOne({ email: userData.email });
        if (!userInfo) {
            throw new Error('El email no existe');
        }
        if (!bcrypt_1.default.compareSync(userData.password, userInfo.password)) {
            throw new Error('Password incorrecto');
        }
        // Narrowing: comprobamos que sea realmente un ObjectId
        if (!(userInfo._id instanceof mongoose_1.Types.ObjectId)) {
            throw new Error('ID de usuario inválido');
        }
        // Convertir a string
        const idString = userInfo._id.toHexString(); // ó .toString()
        const token = (0, jwt_1.generateSign)(idString, userInfo.email);
        const { user, email } = userInfo;
        return { email: email, user: user, token: token };
    }
    catch (error) {
        throw error;
    }
});
exports.login = login;
