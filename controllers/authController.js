import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Base URL del microservicio de autenticación
const AUTH_URL = process.env.AUTH_URL;

// Login del usuario
export const loginUser = async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_URL}/auth/login`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al conectar con el microservicio de autenticación' });
    }
};

// Obtener perfil del usuario
export const getUserProfile = async (req, res) => {
    try {
        const response = await axios.get(`${AUTH_URL}/auth/profile`, {
            headers: { 'Authorization': `Bearer ${req.headers.authorization.split(" ")[1]}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al conectar con el microservicio de autenticación' });
    }
};

// Registro del usuario
export const registerUser = async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_URL}/auth/register`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al conectar con el microservicio de autenticación' });
    }
};
