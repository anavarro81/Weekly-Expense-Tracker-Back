
import UserModel, {IUser} from "../models/user.model";
import {validateUserRegister, ValidationResult} from '../utils/validator' 
import {hashpassword} from '../utils/auth'
import {generateSign} from '../utils/jwt'
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';

// Interfaz para la respuesta de login
// Contiene los datos básicos del usuario y el token JWT generado tras autenticación
export interface IUserInfo {
    email: string;
    user: string;
    token: string;
    userId: string
}


/**
 * Registra un nuevo usuario en la base de datos.
 * - Verifica si el email ya está en uso.
 * - Hashea la contraseña antes de guardar.
 * - Devuelve el usuario creado o lanza un error si el email está repetido.
 * @param userData Datos del usuario a registrar
 */
export const register = async (userData: Partial<IUser>): Promise<ValidationResult | IUser> => {
    try {
        const {user, email, password, categories} = userData

        // Verifica si el email ya existe en la base de datos
        if (await UserModel.exists( {email} )) {
            const conflict = new Error('El email ya está en uso');                
            throw conflict;
        }
        // Hashea la contraseña antes de guardar
        const hashedPassword = await hashpassword(password!) 
        // Crea el usuario en la base de datos
        const newUser = await UserModel.create({user, email, categories, password: hashedPassword})
        return newUser    
    } catch (error) {
        throw error            
    }
}

/**
 * Autentica a un usuario y genera un token JWT si las credenciales son correctas.
 * - Busca el usuario por email.
 * - Compara la contraseña recibida con la almacenada (hasheada).
 * - Si es correcto, genera y devuelve un token junto con los datos básicos del usuario.
 * - Si no, lanza un error genérico para no dar pistas a posibles atacantes.
 * @param userData Datos de login (email y password)
 */
export const login = async (userData: Partial<IUser>): Promise<IUserInfo> => { 
    try {
        // Busca el usuario por email
        const userInfo = await UserModel.findOne({email: userData.email})

        // Si no existe el usuario, lanza error genérico
        if (!userInfo) {
            throw new  Error('credenciales incorrectas');  
        }

        // Compara la contraseña recibida con la almacenada (hasheada)
        if (!bcrypt.compareSync(userData.password!, userInfo.password)) {
            throw new  Error('credenciales incorrectas');  
        }

        // Narrowing: comprobamos que sea realmente un ObjectId
        if (!(userInfo._id instanceof Types.ObjectId)) {
            throw new Error('ID de usuario inválido');
        }
        // Convertir el ObjectId a string para el token
        const idString = userInfo._id.toHexString(); // ó .toString()

        // Genera el token JWT
        const token = generateSign(idString, userInfo.email)

        // Extrae los datos básicos del usuario
        const {user, email } = userInfo

        // Devuelve el objeto con email, user y token
        return {email: email, user: user, userId: userInfo._id.toString(), token: token}
    } catch (error) {
        throw error  
    }
}


