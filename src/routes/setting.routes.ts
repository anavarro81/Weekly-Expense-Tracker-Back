import express from "express";
import {
    getLimit,
    updateLimitAmount
} from '../controllers/setting.controller'

const settingRoute = express.Router();
settingRoute.get('/limit', getLimit);
settingRoute.put('/limit/:id', updateLimitAmount);

export default settingRoute;
