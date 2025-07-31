"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySign = exports.generateSign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateSign = (id, email) => {
    if (!process.env.JWT_KEY) {
        throw new Error('Clave para JWT no informada');
    }
    return jsonwebtoken_1.default.sign({ id, email }, process.env.JWT_KEY, { expiresIn: "1h" });
};
exports.generateSign = generateSign;
const verifySign = (token) => {
    if (!process.env.JWT_KEY) {
        throw new Error('Clave para JWT no informada');
    }
    return jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
};
exports.verifySign = verifySign;
