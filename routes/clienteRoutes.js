import express from 'express';
import {
    getClientes,
    createCliente,
    updateClienteByDNI,
    deleteClienteByDNI,
    reactivateClienteByDNI,
} from '../controllers/clienteController.js';
import { validateToken } from '../middlewares/validateToken.js';

const router = express.Router();

// Listar clientes
router.get('/', validateToken, getClientes);

// Crear un cliente
router.post('/', validateToken, createCliente);

// Actualizar cliente por DNI
router.put('/dni/:dni', validateToken, updateClienteByDNI);

// Eliminar cliente por DNI
router.delete('/dni/:dni', validateToken, deleteClienteByDNI);

// Reactivar cliente por DNI
router.put('/dni/:dni/reactivate', validateToken, reactivateClienteByDNI);

export default router;
