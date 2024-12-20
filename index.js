// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';  // Rutas de autenticación
import clienteRoutes from './routes/clienteRoutes.js';  // Rutas de CRUD de clientes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas base del API Gateway
app.get('/', (req, res) => {
    res.send('¡API Gateway está funcionando!');
});

// Rutas de autenticación
app.use('/auth', authRoutes);

// Rutas de clientes (CRUD)
app.use('/clientes', clienteRoutes);

app.listen(PORT, () => {
    console.log(`API Gateway corriendo en el puerto ${PORT}`);
});
