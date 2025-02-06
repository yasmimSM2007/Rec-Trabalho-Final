import express from 'express'
const router = express.Routes()
import { addLivro, buscarLivro } from '../controllers/livrosControllers.js'

livrosRouter.post('/', addLivro)
livrosRouter.post('/', buscarLivro)

export{livrosRouter}