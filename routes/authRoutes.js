import express from 'express';
import { loginUser, getUserProfile, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Ruta de registro
router.post('/register', registerUser);  // Registrar un nuevo usuario

// Rutas de autenticación
router.post('/login', loginUser);  // Login sin token
router.get('/profile', getUserProfile); // Perfil protegido por token (validado por el microservicio)

export default router;
