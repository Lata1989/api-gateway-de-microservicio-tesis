import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const validateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Obtener el token de la cabecera

    if (!token) {
        return res.status(403).json({ message: 'No se proporcionó un token' });
    }

    try {
        // Decodificar el token para obtener la información del usuario
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Inyectar la información del usuario en req.user
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido' });
    }
};
