// src/config/bd.ts

import mongoose from "mongoose";

export const connectDB = async () => {   

    if (!process.env.BD_URI) {
        console.log('No se ha encontrad URI de conexión a BBDD')
        process.exit(1);
    }

    try {
    
        const {connection} = await mongoose.connect(process.env.BD_URI)
        const url = `${connection.host}: ${connection.port}`
        console.log('Base de datos conectada: ',  url)
    
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error al conectar a la base de datos ', error.message)
        } else {
            console.log('Error desconocido al conectar a la base de datos ', error)
        }
        process.exit(1);
        
    }

}