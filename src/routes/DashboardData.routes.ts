import express from "express";
import {getDashboardData} from '../controllers/dashboard.controller'


const dashboardRoute = express.Router();

dashboardRoute.get('/', getDashboardData)

export default dashboardRoute;
