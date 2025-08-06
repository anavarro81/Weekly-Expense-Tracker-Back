import express from "express";
import {getUserData} from '../controllers/user.controller'


const userRoute = express.Router();

userRoute.get('/', getUserData);


export default userRoute;