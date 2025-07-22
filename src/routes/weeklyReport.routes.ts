import express from "express";
import {
    getWeeklyReport,
    
} from '../controllers/weeklyReport.controller'



const weeklyReportRoute = express.Router();
weeklyReportRoute.get('/', getWeeklyReport);

export default weeklyReportRoute;

