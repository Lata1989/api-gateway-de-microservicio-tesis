// middlewares/attachToken.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const attachToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];  // Extraemos el token desde "Bearer <token>"
    
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    // Verificamos el token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido o expirado' });
        }

        // Añadimos el user del token al objeto `req` para que esté disponible en los controladores
        req.user = decoded; 
        next();  // Continuamos con la solicitud
    });
};
