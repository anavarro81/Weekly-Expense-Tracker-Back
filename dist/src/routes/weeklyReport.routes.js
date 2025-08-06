"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weeklyReport_controller_1 = require("../controllers/weeklyReport.controller");
const weeklyReportRoute = express_1.default.Router();
weeklyReportRoute.get('/', weeklyReport_controller_1.getWeeklyReport);
exports.default = weeklyReportRoute;
//# sourceMappingURL=weeklyReport.routes.js.map