import * as settingService from '../services/setting.service'
import { Request, Response, NextFunction } from 'express';

export const getLimit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        const settings = await settingService.getLimit()
        res.status(200).json(settings)        
    } catch (error: any) {
        next(error)        
    }

}

export const updateLimitAmount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {       

        const {id} = req.params;
        const {limit}= req.body
        const updatedLimit = await settingService.updateLimitAmount(id, limit)
        res.status(200).json(updatedLimit)

    } catch (error: any) {
        next(error)
    }
}