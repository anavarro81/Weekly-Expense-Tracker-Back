import express from 'express';
import settingRoute from './src/routes/setting.routes'
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
import 'dotenv/config'
// Carga la conexion a la bbdd
import {connectDB} from './config/bd'

const app = express()

connectDB();

// Permite leer los datos que vienen de un formulario
app.use(express.json())

app.use('/settings', settingRoute)


app.use('/', (req, res) => {
    res.send('Server is running...')
})





export default app; 
