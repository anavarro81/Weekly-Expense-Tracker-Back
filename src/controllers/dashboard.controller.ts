import {Response, Request, NextFunction} from 'express'
import {getDashboardDataService} from '../services/DashboardData.service'
import {getUserID} from '../utils/auth'

export const  getDashboardData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        const userId = await getUserID(req)

        const data = await getDashboardDataService(userId)
        res.status(200).json(data)
        
    } catch (error) {
        next(error)
    }

}