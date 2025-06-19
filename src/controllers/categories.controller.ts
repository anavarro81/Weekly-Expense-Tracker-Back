import * as categoryService from '../services/category.service'
import { Request, Response, NextFunction } from 'express';

export const newCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {    
    try {        
        const newCategoryData = req.body

        if (!newCategoryData || Object.keys(newCategoryData).length === 0) {
            res.status(400).json({message: "nombre de categoria no informaado"})
        }
        
        const createdCategory = await categoryService.createCategory(newCategoryData)
        res.status(201).json(createdCategory)        
        
    } catch (error: any) {
        next(error)
        
    }

}

export const loadCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        const createdCategories = await categoryService.loadCategories(req.body)
        res.status(201).json(createdCategories)
        
    } catch (error: any) {
        next(error);
        
    }

}

export const getAllCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    try {
        const categories = await categoryService.getAllCategoriesService()
        res.status(200).json(categories)
    } catch (error:any) {
        next(error);

    }
}