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
exports.getUserID = exports.hashpassword = void 0;
// Utilidades de autenticación
// Este archivo contiene funciones para el manejo seguro de contraseñas usando bcrypt
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../utils/jwt");
/**
 * Hashea una contraseña usando bcrypt.
 * - Genera un salt aleatorio con 10 rondas.
 * - Devuelve la contraseña cifrada lista para almacenar en base de datos.
 * @param password Contraseña en texto plano
 * @returns Contraseña cifrada
 */
const hashpassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    return yield bcrypt_1.default.hash(password, salt);
});
exports.hashpassword = hashpassword;
const getUserID = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    if (!token) {
        throw new Error('No existe el token; Usuario no autorizado');
    }
    const userId = (0, jwt_1.verifySign)(token);
    return userId;
});
exports.getUserID = getUserID;
//# sourceMappingURL=auth.js.map