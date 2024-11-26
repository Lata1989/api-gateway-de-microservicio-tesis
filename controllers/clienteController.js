import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Base URL del microservicio de clientes
const CLIENTES_URL = process.env.CLIENTES_URL;

// Obtener todos los clientes (con paginación y búsqueda)
export const getClientes = async (req, res) => {
    try {
        const response = await axios.get(`${CLIENTES_URL}/clientes`, {
            params: req.query, // Pasar query params (paginación, búsqueda)
            headers: { Authorization: req.headers.authorization },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ message: 'Error al conectar con el microservicio de clientes' });
    }
};

// Crear un nuevo cliente
export const createCliente = async (req, res) => {
    try {
        const response = await axios.post(`${CLIENTES_URL}/clientes`, req.body, {
            headers: { Authorization: req.headers.authorization },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error al crear cliente:', error);
        res.status(500).json({ message: 'Error al conectar con el microservicio de clientes' });
    }
};

// Actualizar cliente por DNI
export const updateClienteByDNI = async (req, res) => {
    try {
        const { dni } = req.params;
        const response = await axios.put(`${CLIENTES_URL}/clientes/dni/${dni}`, req.body, {
            headers: { Authorization: req.headers.authorization },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        res.status(500).json({ message: 'Error al conectar con el microservicio de clientes' });
    }
};

// Eliminar cliente por DNI
export const deleteClienteByDNI = async (req, res) => {
    try {
        const { dni } = req.params;
        const response = await axios.delete(`${CLIENTES_URL}/clientes/dni/${dni}`, {
            headers: { Authorization: req.headers.authorization },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ message: 'Error al conectar con el microservicio de clientes' });
    }
};

// Reactivar cliente por DNI
export const reactivateClienteByDNI = async (req, res) => {
    try {
        const { dni } = req.params;
        const response = await axios.put(`${CLIENTES_URL}/clientes/dni/${dni}/reactivate`, {}, {
            headers: { Authorization: req.headers.authorization },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error al reactivar cliente:', error);
        res.status(500).json({ message: 'Error al conectar con el microservicio de clientes' });
    }
};
