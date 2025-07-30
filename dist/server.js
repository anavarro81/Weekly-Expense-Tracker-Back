"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setting_routes_1 = __importDefault(require("./src/routes/setting.routes"));
const categories_routes_1 = __importDefault(require("./src/routes/categories.routes"));
const DashboardData_routes_1 = __importDefault(require("./src/routes/DashboardData.routes"));
const expense_routes_1 = __importDefault(require("./src/routes/expense.routes"));
const weeklyReport_routes_1 = __importDefault(require("./src/routes/weeklyReport.routes"));
const auth_routes_1 = __importDefault(require("./src/routes/auth.routes"));
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./config/cors");
const error_middleware_1 = require("./src/middlewares/error.middleware");
// Carga la conexion a la bbdd
const bd_1 = require("./config/bd");
const app = (0, express_1.default)();
(0, bd_1.connectDB)();
app.use((0, cors_1.default)(cors_2.corsConfig));
// Permite leer los datos que vienen de un formulario
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log('Middleware global: petición recibida en', req.method, req.url);
    next();
});
app.use('/report', weeklyReport_routes_1.default);
app.use('/settings', setting_routes_1.default);
app.use('/categories', categories_routes_1.default);
app.use('/dashboard', DashboardData_routes_1.default);
app.use('/expenses', expense_routes_1.default);
app.use('/auth/', auth_routes_1.default);
app.use('/', (req, res) => {
    console.log('Middleware 404: No se encontró la ruta', req.method, req.url);
    res.status(404).json({ message: 'La url solicitada no existe' });
});
app.use(error_middleware_1.errorHandler);
exports.default = app;
