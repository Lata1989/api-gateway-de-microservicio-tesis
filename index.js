import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'; // Importa las rutas de autenticación

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas base del API Gateway
app.get('/', (req, res) => {
    res.send('¡API Gateway está funcionando!');
});

// Rutas de autenticación
app.use('/auth', authRoutes);  // Redirige a las rutas del microservicio de autenticación

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`API Gateway corriendo en el puerto ${PORT}`);
});
