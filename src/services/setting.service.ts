import SettingModel from "../models/setting.model"

export const getLimit = async () => {

    const settings = await SettingModel.find({})

    

    if (!settings) {
        throw new Error ('No se ha encontrado configuracion')
    }

    return settings

}