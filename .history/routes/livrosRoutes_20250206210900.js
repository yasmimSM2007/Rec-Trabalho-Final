import express from 'express';
import { addLivro, atualizarLivro, buscarLivro, buscarLivroPorId, deleteLivro } from '../controllers/livrosControllers.js';

const livrosRouter = express.Router();


livrosRouter.post('/', addLivro);
livrosRouter.get('/', buscarLivro); 
livrosRouter.get('/:id', buscarLivroPorId); 
livrosRouter.put('/:id', atualizarLivro);
livrosRouter.delete('/:id', deleteLivro);

export { livrosRouter };



