"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        throw new Error('No existe el Token');
    }
    try {
        const decoded = (0, jwt_1.verifySign)(token);
        if (!decoded) {
            res.status(401).json({ message: "Token inválido o expirado" });
        }
    }
    catch (error) {
        throw new Error('Token inválido o expirado');
    }
    next();
};
exports.authMiddleware = authMiddleware;
