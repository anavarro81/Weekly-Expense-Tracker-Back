"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserLogin = exports.validateUserRegister = void 0;
const joi_1 = __importDefault(require("joi"));
// Modelo de validacion registro. 
const userSchema = joi_1.default.object({
    user: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
        'string.empty': 'El usuario no puede estar vacío',
        'string.alphanum': 'El usuario solo puede contener letras y números',
        'string.min': 'El usuario debe tener al menos {#limit} caracteres',
        'string.max': 'El usuario no puede tener más de {#limit} caracteres',
        'any.required': 'El usuario es obligatorio',
    }),
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        'string.email': 'El email debe ser una dirección de correo válida',
        'string.empty': 'El email no puede estar vacío',
        'any.required': 'El email es obligatorio',
    }),
    password: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,10}$'))
        .required()
        .messages({
        'string.pattern.base': 'La contraseña debe tener entre 6 y 10 caracteres alfanuméricos',
        'string.empty': 'La contraseña no puede estar vacía',
        'any.required': 'La contraseña es obligatoria',
    }),
});
const loginSchema = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        'string.email': '"email" debe tener un formato válido',
        'any.required': '"email" es obligatorio',
    }),
    password: joi_1.default.string()
        .required()
        .messages({
        'string.empty': 'La contraseña no puede estar vacía',
        'any.required': '"password" es obligatoria',
    })
});
const validateUserRegister = (payload) => {
    // El parametro: abortEarly: false hace que contiene validando para devolver todos los errores.   
    const { error } = userSchema.validate(payload, { abortEarly: false });
    if (!error) {
        return { valid: true, errors: [] };
    }
    // En caso de error devuelve un array con los errores
    const errors = error.details.map(detail => {
        var _a;
        return ({
            field: ((_a = detail.context) === null || _a === void 0 ? void 0 : _a.key) || 'unknown',
            message: detail.message,
        });
    });
    return { valid: false, errors };
};
exports.validateUserRegister = validateUserRegister;
const validateUserLogin = (payload) => {
    // El parametro: abortEarly: false hace que contiene validando para devolver todos los errores. 
    const { error } = loginSchema.validate(payload, { abortEarly: false });
    if (!error) {
        return { valid: true, errors: [] };
    }
    // En caso de error devuelve un array con los errores
    const errors = error.details.map(detail => {
        var _a;
        return ({
            field: ((_a = detail.context) === null || _a === void 0 ? void 0 : _a.key) || 'unknown',
            message: detail.message,
        });
    });
    return { valid: false, errors };
};
exports.validateUserLogin = validateUserLogin;
//# sourceMappingURL=validator.js.map