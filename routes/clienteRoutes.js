import express from 'express';
import {
    getClientes,
    getClienteByDNI,
    createCliente,
    updateClienteByDNI,
    deleteClienteByDNI,
    reactivateClienteByDNI,
} from '../controllers/clienteController.js';

const router = express.Router();

// Listado de clientes
router.get('/', getClientes);

// Buscar cliente por DNI (ya existe)
router.get('/search/dni/:dni', getClienteByDNI); // Ruta para buscar cliente por DNI

// Crear un cliente
router.post('/', createCliente);

// Actualizar cliente por DNI
router.put('/dni/:dni', updateClienteByDNI); // PUT /clientes/dni/:dni

// Eliminar cliente por DNI
router.delete('/dni/:dni', deleteClienteByDNI); // DELETE /clientes/dni/:dni

// Reactivar cliente por DNI
router.put('/reactivate/dni/:dni', reactivateClienteByDNI); // PUT /clientes/reactivate/dni/:dni

export default router;
