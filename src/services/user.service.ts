import UserModel, {IUser} from "../models/user.model";


export const getUserData = async (id: string): Promise<IUser> => {

    try {
        
        console.log ('getUserData userId ', id)
        
        const user = await UserModel.findById(id)

        console.log ('user ', user )
        
        return user as IUser

    } catch (error) {
        throw error
    }
}