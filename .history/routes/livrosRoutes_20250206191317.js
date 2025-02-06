import express from 'express';
const livrosRouter = express.Router();
import { addLivro, buscarLivro } from '../controllers/livrosControllers.js'

livrosRouter.post('/', addLivro)
livrosRouter.post('/', buscarLivro)

export{livrosRouter}
import express from 'express';
const livrosRouter = express.Router();


