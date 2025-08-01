
// Utilidades de autenticación
// Este archivo contiene funciones para el manejo seguro de contraseñas usando bcrypt
import bcrypt from 'bcrypt';


/**
 * Hashea una contraseña usando bcrypt.
 * - Genera un salt aleatorio con 10 rondas.
 * - Devuelve la contraseña cifrada lista para almacenar en base de datos.
 * @param password Contraseña en texto plano
 * @returns Contraseña cifrada
 */
export const hashpassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}