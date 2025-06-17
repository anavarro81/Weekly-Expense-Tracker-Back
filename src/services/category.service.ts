import CategoryModel, {ICategory} from "../models/category.model";

export const createCategory = async (categoryData: Partial<ICategory>): Promise<ICategory> => {


    try {
        // Crea una instancia del modelo y la guarda en la base de datos. 
        const savedCategory = await CategoryModel.create(categoryData);        
        return savedCategory
    } catch (error) {
        console.error('Error in createCategory service:', error); 
        // Se relanza el error para preservar el tipo. 
        throw error;
    }

}