import mongoose from 'mongoose';


export const connectDB = async () => {

    // Si no existe la variable de entorno BD_URI, salimos de la aplicación
    if (!process.env.BD_URI) {
        console.log('No se ha encontrado la variable de entorno BD_URI')
        process.exit(1)
    }

    try {
        const { connection } = await mongoose.connect(process.env.BD_URI) 
        const url = `${connection.host}:${connection.port}`
        console.log(`MongoDB Conectado en ${url}`)
    } catch (error) {
        // Nos aseguramos de que existe error para poder acceder a su propiedad message
        if (error instanceof Error) {
            console.log('Error al conectar a la base de datos:', error.message);
        } else {
            console.log('Error desconocido al conectar a la base de datos:', error);
        }
        process.exit(1)
    }
}
