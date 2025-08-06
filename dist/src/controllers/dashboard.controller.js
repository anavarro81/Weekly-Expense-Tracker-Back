"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardData = void 0;
const DashboardData_service_1 = require("../services/DashboardData.service");
const auth_1 = require("../utils/auth");
const getDashboardData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = yield (0, auth_1.getUserID)(req);
        const data = yield (0, DashboardData_service_1.getDashboardDataService)(userId);
        res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.getDashboardData = getDashboardData;
//# sourceMappingURL=dashboard.controller.js.map