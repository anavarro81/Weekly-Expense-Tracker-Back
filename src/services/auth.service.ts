
import UserModel, {IUser} from "../models/user.model";
import {validateUserRegister, ValidationResult} from '../utils/validator' 
import {hashpassword} from '../utils/auth'
import {generateSign} from '../utils/jwt'
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';

// Interfaz para la respuesta de login
export interface IUserInfo {
    email: string;
    user: string;
    token: string;
}


export const register = async (userData: Partial<IUser>): Promise<ValidationResult | IUser> => {
        
        try {

            const {user, email, password} = userData

            if (await UserModel.exists( {email} )) {
                const conflict = new Error('El email ya está en uso');                
                throw conflict;
            }
            
            const hashedPassword = await hashpassword(password!) 
            const newUser = await UserModel.create({user, email, password: hashedPassword})
            return newUser    
            
        } catch (error) {
            throw error            
        }

}

export const login = async (userData: Partial<IUser>): Promise<IUserInfo> => { 

    try {

        const userInfo = await UserModel.findOne({email: userData.email})

        // Aunque el error sea de correo no encontrado no se indica el motivo para no dar pistas a
        // posibles atacantes. 
        if (!userInfo) {
        throw new  Error('credenciales incorrectas');  
        }

        // Aunque el error sea de password incorrecta no se indica el motivo para no dar pistas a
        // posibles atacantes. 

        if (!bcrypt.compareSync(userData.password!, userInfo.password)) {
            throw new  Error('credenciales incorrectas');  
        }

        // Narrowing: comprobamos que sea realmente un ObjectId
        if (!(userInfo._id instanceof Types.ObjectId)) {
            throw new Error('ID de usuario inválido');
        }
        
        // Convertir a string
        const idString = userInfo._id.toHexString(); // ó .toString()


        const token = generateSign(idString, userInfo.email)

        const {user, email } = userInfo



        return {email: email, user: user, token: token}

        
    } catch (error) {
      throw error  
    }
    
    
    

    

    

}

