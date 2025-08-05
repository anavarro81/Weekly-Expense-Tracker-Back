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
/**
 * Registra un nuevo usuario en la base de datos.
 * - Verifica si el email ya está en uso.
 * - Hashea la contraseña antes de guardar.
 * - Devuelve el usuario creado o lanza un error si el email está repetido.
 * @param userData Datos del usuario a registrar
 */
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, email, password } = userData;
        // Verifica si el email ya existe en la base de datos
        if (yield user_model_1.default.exists({ email })) {
            const conflict = new Error('El email ya está en uso');
            throw conflict;
        }
        // Hashea la contraseña antes de guardar
        const hashedPassword = yield (0, auth_1.hashpassword)(password);
        // Crea el usuario en la base de datos
        const newUser = yield user_model_1.default.create({ user, email, password: hashedPassword });
        return newUser;
    }
    catch (error) {
        throw error;
    }
});
exports.register = register;
/**
 * Autentica a un usuario y genera un token JWT si las credenciales son correctas.
 * - Busca el usuario por email.
 * - Compara la contraseña recibida con la almacenada (hasheada).
 * - Si es correcto, genera y devuelve un token junto con los datos básicos del usuario.
 * - Si no, lanza un error genérico para no dar pistas a posibles atacantes.
 * @param userData Datos de login (email y password)
 */
const login = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Busca el usuario por email
        const userInfo = yield user_model_1.default.findOne({ email: userData.email });
        // Si no existe el usuario, lanza error genérico
        if (!userInfo) {
            throw new Error('credenciales incorrectas');
        }
        // Compara la contraseña recibida con la almacenada (hasheada)
        if (!bcrypt_1.default.compareSync(userData.password, userInfo.password)) {
            throw new Error('credenciales incorrectas');
        }
        // Narrowing: comprobamos que sea realmente un ObjectId
        if (!(userInfo._id instanceof mongoose_1.Types.ObjectId)) {
            throw new Error('ID de usuario inválido');
        }
        // Convertir el ObjectId a string para el token
        const idString = userInfo._id.toHexString(); // ó .toString()
        // Genera el token JWT
        const token = (0, jwt_1.generateSign)(idString, userInfo.email);
        // Extrae los datos básicos del usuario
        const { user, email } = userInfo;
        // Devuelve el objeto con email, user y token
        return { email: email, user: user, userId: userInfo._id.toString(), token: token };
    }
    catch (error) {
        throw error;
    }
});
exports.login = login;
