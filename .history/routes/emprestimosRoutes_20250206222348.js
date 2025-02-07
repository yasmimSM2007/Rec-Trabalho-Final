import express from 'express';
import { addEmprestimo} from '../controllers/emprestimosControllers.js';
import { buscarEmprestimo } from '../controllers/emprestimosControllers.js';

const emprestimosRouter = express.Router();


emprestimosRouter.post('/', addEmprestimo);
emprestimosRouter.get('/', buscarEmprestimo); 
emprestimosRouter.get('/:id', buscarEmprestimoPorId);  
emprestimosRouter.put('/:id', atualizarEmprestimo);
emprestimosRouter.delete('/:id', deleteEmprestimo);

export { emprestimosRouter };

