import Joi from 'joi';
import { IUser } from '../models/user.model';

export interface ValidationResult {
  valid: boolean;
  errors: { field: string; message: string }[];
}

// Modelo de validacion registro. 
const userSchema = Joi.object({
  user: Joi.string()
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
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'El email debe ser una dirección de correo válida',
      'string.empty': 'El email no puede estar vacío',
      'any.required': 'El email es obligatorio',
    }),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,10}$'))
    .required()
    .messages({
      'string.pattern.base': 'La contraseña debe tener entre 6 y 10 caracteres alfanuméricos',
      'string.empty': 'La contraseña no puede estar vacía',
      'any.required': 'La contraseña es obligatoria',
    }),
});

const authrSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
       'string.email': '"email" debe tener un formato válido', 
       'any.required': '"email" es obligatorio',
    }),
    password: Joi.string()    
    .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
    .required()
    .messages({
     'string.pattern.base': '"password" debe de tener entre 6-8 caracteres',   
     'any.required': '"password" is required',
    })
})

export const validateUserRegister = (payload: Partial<IUser>): ValidationResult => {
  
  // El parametro: abortEarly: false hace que contiene validando para devolver todos los errores.   
  const { error } = userSchema.validate(payload, { abortEarly: false });

  if (!error) {
    return { valid: true, errors: [] };
  }
  
  // En caso de error devuelve un array con los errores
  const errors = error.details.map(detail => ({
    field: detail.context?.key || 'unknown',
    message: detail.message,
  }));

  return { valid: false, errors };
}

export const validateUserLogin = (payload: Partial<IUser>): ValidationResult => { 
    
    // El parametro: abortEarly: false hace que contiene validando para devolver todos los errores. 
    const { error } = authrSchema.validate(payload, { abortEarly: false });

    if (!error) {
    return { valid: true, errors: [] };
    }

    // En caso de error devuelve un array con los errores
    const errors = error.details.map(detail => ({
        field: detail.context?.key || 'unknown',
        message: detail.message,
    }));

    return { valid: false, errors };
    
    
}
