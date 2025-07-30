import UserModel, {IUser} from "../models/user.model";
import {validateUserRegister, ValidationResult} from '../utils/validator' 

export const register = async (userData: Partial<IUser>): Promise<ValidationResult> => {

        const validUser =validateUserRegister(userData)
        return validUser    

    // try {
    //     // Crea una instancia del modelo y la guarda en la base de datos. 
    //     const savedCategory = await CategoryModel.create(categoryData);        
    //     return savedCategory
    // } catch (error) {
    //     console.error('Error en el registro de usuario', error); 
    //     throw error;
    // }

}
