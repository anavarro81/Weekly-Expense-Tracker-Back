import express from "express";
import {getUserData, updateSetting} from '../controllers/user.controller'


const userRoute = express.Router();

userRoute.get('/', getUserData);
userRoute.put('/setting', updateSetting)


export default userRoute;