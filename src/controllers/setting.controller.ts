import * as settingService from '../services/setting.service'
import { Request, Response } from 'express';

export const getLimit = async (req: Request, res: Response): Promise<void> => {

    try {

        const settings = await settingService.getLimit()
        res.status(200).json(settings)
        
    } catch (error) {
        
    }

}