

// TODO - Acceder a traves de los datos del usuario. 
const getSetting = async(userId: string) => {



    // const setting = await getLimit()
    // return setting

}

const getCategories = async() => {
    // TODO - Acceder a traves de los datos del usuario. 
    // // const categories = await getAllCategoriesService()
    // console.log(categories)
    // return categories
}


export const getDashboardDataService = async (userId: string) => {

    const  setting = await getSetting(userId)
   
    console.log('setting ', setting)


    const categories = await getCategories()
    // return {limit: limit, categories: categories}
    
    return {
        // TODO - Devolver el limite del usuario y de sus categorasi
        // limit: setting.limit,
        // categories: categories
    }
    


}