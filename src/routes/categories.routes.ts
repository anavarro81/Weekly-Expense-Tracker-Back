import express from "express";
import {newCategory, loadCategories} from '../controllers/categories.controller'


const categoryRoute = express.Router();

categoryRoute.post('/', newCategory);
categoryRoute.post('/loadcategories', loadCategories)

export default categoryRoute;