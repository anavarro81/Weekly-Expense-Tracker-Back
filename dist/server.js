"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setting_routes_1 = __importDefault(require("./src/routes/setting.routes"));
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./config/cors");
// Carga la conexion a la bbdd
const bd_1 = require("./config/bd");
const app = (0, express_1.default)();
(0, bd_1.connectDB)();
app.use((0, cors_1.default)(cors_2.corsConfig));
// Permite leer los datos que vienen de un formulario
app.use(express_1.default.json());
app.use('/settings', setting_routes_1.default);
app.use('/', (req, res) => {
    res.send('Server is running...');
});
exports.default = app;
