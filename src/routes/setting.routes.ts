import express from "express";
import {
    getLimit,
} from '../controllers/setting.controller'

const settingRoute = express.Router();
settingRoute.get('/limit', getLimit);


export default settingRoute;
