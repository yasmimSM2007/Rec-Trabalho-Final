import express from 'express';
import { addLivro, buscarLivro } from '../controllers/livrosControllers.js';

const livrosRouter = express.Router();

// Rota para adicionar um livro
livrosRouter.post('/', addLivro);

// Rota para buscar um livro
livrosRouter.get('/', buscarLivro); // Vamos usar GET para buscar livros

export { livrosRouter };



