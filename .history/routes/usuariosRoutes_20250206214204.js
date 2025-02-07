import express from 'express';
import { addUsuario, atualizarUsuario, buscarUsuario, buscarUsuarioPorId, deleteUsuario } from '../controllers/usuariosControllers.js';

const usuariosRouter = express.Router();


usuariosRouter.post('/', addUsuario);
usuariosRouter.get('/', buscarUsuario); 
usuariosRouter.get('/:id', buscarUsuarioPorId); 
usuariosRouter.put('/:id', atualizarUsuario);
usuariosRouter.delete('/:id', deleteUsuario);

export { usuariosRouter };
