import SettingModel, {ISetting} from "../models/setting.model"

export const getLimit = async (): Promise<ISetting> => {

    const settings = await SettingModel.findOne({})
    if (!settings) {
        throw new Error ('No se ha encontrado configuracion')
    }
    return settings

}

export const updateLimitAmount = async (id: string, limit: number) => {

    if (!id) {
        throw new Error ('id del límite no definido ')
    }

    if (!limit || limit <= 0) {
        throw new Error (`El importe límite: ${limit} no es correcto`)
    }

    const updatedLimit = await SettingModel.findByIdAndUpdate(
        id,
        {
            $set: {
                limit: limit
            },

        }, 
        
        {new: true, upsert: true}
    )

    console.log ('updatedLimit ', updatedLimit)

    if (!updatedLimit) {
        throw new Error ('Error actualizando el importe límite')
    }

    return updatedLimit

}