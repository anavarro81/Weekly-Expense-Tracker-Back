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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // Si no existe la variable de entorno BD_URI, salimos de la aplicación
    if (!process.env.BD_URI) {
        console.log('No se ha encontrado la variable de entorno BD_URI');
        process.exit(1);
    }
    try {
        const { connection } = yield mongoose_1.default.connect(process.env.BD_URI);
        const url = `${connection.host}:${connection.port}`;
        console.log(`MongoDB Conectado en ${url}`);
    }
    catch (error) {
        // Nos aseguramos de que existe error para poder acceder a su propiedad message
        if (error instanceof Error) {
            console.log('Error al conectar a la base de datos:', error.message);
        }
        else {
            console.log('Error desconocido al conectar a la base de datos:', error);
        }
        process.exit(1);
    }
});
exports.connectDB = connectDB;
