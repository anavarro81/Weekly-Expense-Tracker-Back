import UserModel, {IUser} from "../models/user.model";


export const getUserData = async (id: string): Promise<IUser> => {

    try {
        
        
        const user = await UserModel.findById(id)

        console.log ('user ', user )
        
        return user as IUser

    } catch (error) {
        throw error
    }
}

// Los parametros limite y categorias son opcionales. Puede actulizarse a la vez uno o los dos.  
export const updateSetting = async (id: string, limit?: number, categories?: string[]): Promise<IUser> => {

    const updateFields: any = {};

    if (limit !== undefined) updateFields.weeklylimit = limit;
    if (categories !== undefined) updateFields.categories = categories;

    
    if (Object.keys(updateFields).length == 0) {
        throw new Error('No se ha mandado ningun dato para actualizar');
    }

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            id, 
            {$set: updateFields},
            // Si actualiza el documento devuelve una copia con los nuevos datos. 
            { new: true }
        )

        return updatedUser as IUser
        
    } catch (error) {
       throw error
    }


    

}