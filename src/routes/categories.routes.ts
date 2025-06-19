import express from "express";
import {newCategory, loadCategories, getAllCategories} from '../controllers/categories.controller'


const categoryRoute = express.Router();

categoryRoute.post('/', newCategory);
categoryRoute.post('/loadcategories', loadCategories)
categoryRoute.get('/', getAllCategories)

export default categoryRoute;