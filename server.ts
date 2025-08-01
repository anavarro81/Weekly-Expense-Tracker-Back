import express from 'express';

import settingRoute from './src/routes/setting.routes'
import categoryRoute from './src/routes/categories.routes'
import dashboardRoute from './src/routes/DashboardData.routes'
import expenseRoute from './src/routes/expense.routes'
import weeklyReportRoute from './src/routes/weeklyReport.routes'
import authRoute from './src/routes/auth.routes'
import {authMiddleware} from './src/middlewares/auth.middleware'
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
import 'dotenv/config'
import cors from 'cors';
import {corsConfig} from './config/cors'
import {errorHandler} from './src/middlewares/error.middleware'
// Carga la conexion a la bbdd
import {connectDB} from './config/bd'

const app = express()


connectDB();

app.use(cors(corsConfig))

// Permite leer los datos que vienen de un formulario
app.use(express.json())

app.use((req, res, next) => {
    console.log('Middleware global: petición recibida en', req.method, req.url);
    next();
});


// Rutas públicas (sin autenticación)
app.use('/auth/', authRoute)

// Rutas protegidas (requieren autenticación)
app.use(authMiddleware);
app.use('/report', weeklyReportRoute)
app.use('/settings',  settingRoute)
app.use('/categories', categoryRoute)
app.use('/dashboard', dashboardRoute)
app.use('/expenses',  expenseRoute)



app.use('/', (req, res) => {
    console.log('Middleware 404: No se encontró la ruta', req.method, req.url);
    res.status(404).json({message: 'La url solicitada no existe'})
})


app.use(errorHandler)


export default app; 
