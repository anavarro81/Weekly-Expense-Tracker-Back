import {Response, Request, NextFunction} from 'express'
import {getDashboardDataService} from '../services/DashboardData.service'

export const  getDashboardData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        const data = await getDashboardDataService()
        res.status(200).json(data)
        
    } catch (error) {
        next(error)
    }

}