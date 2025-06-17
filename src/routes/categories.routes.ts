import express from "express";
import {newCategory} from '../controllers/categories.controller'


const categoryRoute = express.Router();

categoryRoute.post('/', newCategory);

export default categoryRoute;