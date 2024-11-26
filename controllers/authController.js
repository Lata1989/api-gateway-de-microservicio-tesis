import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

let tokenCache = {};  // Almacenamiento temporal de tokens en memoria

// Base URL del microservicio de autenticación
const AUTH_URL = process.env.AUTH_URL;

// Login del usuario
export const loginUser = async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_URL}/auth/login`, req.body);
        const { token, user } = response.data;

        // Guardamos el token en memoria usando el email del usuario
        tokenCache[user.email] = token;

        res.json({ message: 'Login exitoso', user, token });
    } catch (error) {
        console.error('Error en login:', error.message);
        res.status(500).json({ message: 'Error al conectar con el microservicio de autenticación' });
    }
};

// Obtener perfil del usuario
export const getUserProfile = async (req, res) => {
    const userEmail = req.headers['user-email'];

    // Validamos que el email tenga un token asociado
    if (!userEmail || !tokenCache[userEmail]) {
        return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    try {
        const response = await axios.get(`${AUTH_URL}/auth/profile`, {
            headers: { Authorization: `Bearer ${tokenCache[userEmail]}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener perfil:', error.message);
        res.status(500).json({ message: 'Error al conectar con el microservicio de autenticación' });
    }
};

// Registro del usuario
export const registerUser = async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_URL}/auth/register`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error en registro:', error.message);
        res.status(500).json({ message: 'Error al conectar con el microservicio de autenticación' });
    }
};
