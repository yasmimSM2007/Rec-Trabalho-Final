import express from 'express'
const router = express.Router()
import { addLivro, buscarLivro } from '../controllers/alunosControllers'

livrosRouter.post('/', addLivro)
livrosRouter.post('/', buscarLivro)

export{livrosRouter}