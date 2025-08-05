"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySign = exports.generateSign = void 0;
// Utilidades para manejo de JSON Web Tokens (JWT)
// Este archivo permite generar y verificar tokens para autenticación y autorización
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Genera un token JWT firmado con la clave secreta.
 * - Incluye el id y el email en el payload.
 * - El token expira en 1 hora.
 * @param id Identificador del usuario
 * @param email Email del usuario
 * @returns Token JWT
 */
const generateSign = (id, email) => {
    if (!process.env.JWT_KEY) {
        throw new Error('Clave para JWT no informada');
    }
    return jsonwebtoken_1.default.sign({ id, email }, process.env.JWT_KEY, { expiresIn: "1h" });
};
exports.generateSign = generateSign;
/**
 * Verifica y decodifica un token JWT usando la clave secreta.
 * - Si la clave no está informada, lanza un error.
 * - Si el token es válido, devuelve el payload decodificado.
 * @param token Token JWT a verificar
 * @returns Payload decodificado (string o JwtPayload)
 */
const verifySign = (token) => {
    if (!process.env.JWT_KEY) {
        throw new Error('Clave para JWT no informada');
    }
    // Aserción de tipo. Le dice a TS que trate el valor que me devuelve jwt.verify como si fuera un objeto con la forma de MyJwtPayload
    const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
    // Devuelve el id del usuario. 
    return payload.id;
};
exports.verifySign = verifySign;
