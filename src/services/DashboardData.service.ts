import {getLimit} from '../services/setting.service'
import {getAllCategoriesService} from '../services/category.service'

const getSetting = async() => {

    const setting = await getLimit()
    return setting

}

const getCategories = async() => {
    const categories = await getAllCategoriesService()
    console.log(categories)
    return categories
}


export const getDashboardDataService = async () => {

    const  setting = await getSetting()
   
    console.log('setting ', setting)


    const categories = await getCategories()
    // return {limit: limit, categories: categories}
    
    return {
    
        limit: setting.limit,
        categories: categories
    }
    


}