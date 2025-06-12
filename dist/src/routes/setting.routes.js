"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setting_controller_1 = require("../controllers/setting.controller");
const settingRoute = express_1.default.Router();
settingRoute.get('/limit', setting_controller_1.getLimit);
exports.default = settingRoute;
