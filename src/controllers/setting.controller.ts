import * as settingService from '../services/setting.service'
import { Request, Response } from 'express';

export const getLimit = async (req: Request, res: Response): Promise<void> => {

    try {
        const settings = await settingService.getLimit()
        res.status(200).json(settings)        
    } catch (error: any) {
        console.log('error ', error)
        res.status(500).json({"message": "error recuperando configuración", "error": error.message})
    }

}

export const updateLimitAmount = async (req: Request, res: Response): Promise<void> => {

    try {       

        const {id} = req.params;
        const {limit}= req.body
        const updatedLimit = await settingService.updateLimitAmount(id, limit)
        res.status(200).json(updatedLimit)

    } catch (error: any) {
        res.status(500).json({message: "error al actualizar el límite", "error": error.message})
    }
}