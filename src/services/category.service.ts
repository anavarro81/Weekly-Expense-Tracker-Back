
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

export const loadCategories = async (categories: Partial<ICategory>[]): Promise<ICategory[]> => {

    try {
        const insertedCategories = await CategoryModel.insertMany(categories)
        // Se usa asercicion para indicar al compilador que estamos seguros de que lo devuelto por Mongoose es del 
        // tipo ICategory
        return insertedCategories as ICategory[]

        
    } catch (error: any) {

        if (error.code === 11000) { // Código de error para duplicados
             console.error('¡Error de clave duplicada!');
             throw new Error('Nombre de categoria duplicada')
        } else {
            console.error ('Error al insertar las categorias' , error)
            throw error
        }


    }

}

export const getAllCategoriesService = async (): Promise<ICategory[]> => {
    try {
        
        const categories = await CategoryModel.find({})        
        return categories as ICategory[]

    } catch (error: unknown) {        
        throw error
        
    }
}