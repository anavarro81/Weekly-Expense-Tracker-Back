"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
require("dotenv/config");
const app = (0, express_1.default)();
//connectDB();
// Permite leer los datos que vienen de un formulario
app.use(express_1.default.json());
app.use('/', (req, res) => {
    res.send('Server is running...');
});
exports.default = app;
