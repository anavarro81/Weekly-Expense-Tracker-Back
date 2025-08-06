"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
/**
 * Middleware que protege rutas verificando el token JWT.
 * - Extrae el token de la cabecera Authorization.
 * - Si no existe el token, lanza error.
 * - Si el token es inválido o expirado, responde con 401.
 * - Si el token es válido, permite continuar con la petición.
 */
const authMiddleware = (req, res, next) => {
    var _a;
    // Extrae el token de la cabecera Authorization (formato: Bearer <token>)
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        throw new Error('No existe el Token');
    }
    try {
        // Verifica el token usando la función utilitaria
        const decoded = (0, jwt_1.verifySign)(token);
        if (!decoded) {
            // Si el token no es válido, responde con 401
            res.status(401).json({ message: "Token inválido o expirado" });
        }
    }
    catch (error) {
        // Si ocurre un error al verificar, responde con 401
        res.status(401).json({ message: "Token inválido o expirado" });
    }
    // Si todo es correcto, continúa con la siguiente función/middleware
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map