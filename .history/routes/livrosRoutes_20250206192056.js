import express from 'express';
import { addLivro, buscarLivro } from '../controllers/livrosControllers.js';

const livrosRouter = express.Router();


livrosRouter.post('/', addLivro);


livrosRouter.get('/', buscarLivro); 

export { livrosRouter };



