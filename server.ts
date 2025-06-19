import express from 'express';
import settingRoute from './src/routes/setting.routes'
import categoryRoute from './src/routes/categories.routes'
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

app.use('/settings', settingRoute)
app.use('/categories', categoryRoute)

app.use('/', (req, res) => {
    res.status(404).json({message: 'La url solicitada no existe'})
})


app.use(errorHandler)


export default app; 
