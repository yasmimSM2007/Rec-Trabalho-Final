import express from 'express';
import { addEmprestimo, buscarEmprestimo, buscarEmprestimoPorId, atualizarEmprestimo, deleteEmprestimo } from '../controllers/emprestimosControllers.js';

const emprestimosRouter = express.Router();


emprestimosRouter.post('/', addEmprestimo);
emprestimosRouter.get('/', buscarEmprestimo); 
emprestimosRouter.get('/:id', buscarEmprestimoPorId);  
emprestimosRouter.put('/:id', atualizarEmprestimo);
emprestimosRouter.delete('/:id', deleteEmprestimo);

export { emprestimosRouter };

