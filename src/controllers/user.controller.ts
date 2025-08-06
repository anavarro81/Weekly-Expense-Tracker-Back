import * as userService from '../services/user.service'
import { Request, Response, NextFunction } from 'express';
import {getUserID} from '../utils/auth'


export const getUserData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = await getUserID(req)
    try {

        const user = await userService.getUserData(userId)
        res.status(200).json(user)
        

    } catch (error) {
      next(error)  
    }
}

export const updateSetting = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 

  const userId = await getUserID(req)

  try {

    const {limit, categories} = req.body

    const updatedUser = await userService.updateSetting(userId, limit, categories)
    res.status(200).json(updatedUser)
    
  } catch (error) {
    next(error)
  }


}

