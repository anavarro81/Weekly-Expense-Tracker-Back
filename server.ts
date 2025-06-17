import express from 'express';
import settingRoute from './src/routes/setting.routes'
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
import 'dotenv/config'
import cors from 'cors';
import {corsConfig} from './config/cors'

// Carga la conexion a la bbdd
import {connectDB} from './config/bd'

const app = express()


connectDB();

app.use(cors(corsConfig))

// Permite leer los datos que vienen de un formulario
app.use(express.json())

app.use('/settings', settingRoute)


app.use('/', (req, res) => {
    res.send('Server is running...')
})





export default app; 
