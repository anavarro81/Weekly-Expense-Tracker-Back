import * as categoryService from '../services/category.service'
import { Request, Response } from 'express';

export const newCategory = async (req: Request, res: Response): Promise<void> => {    
    try {        
        const newCategoryData = req.body

        if (!newCategoryData || Object.keys(newCategoryData).length === 0) {
            res.status(400).json({message: "nombre de categoria no informaado"})
        }
        
        const createdCategory = await categoryService.createCategory(newCategoryData)
        res.status(201).json(createdCategory)        
        
    } catch (error: any) {
        console.error('Error creando la categoria ', error)
        res.status(500).json({"message": "error recuperando configuración", "error": error.message})
    }

}