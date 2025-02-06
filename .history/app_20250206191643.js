import express from 'express';
import mongoose from 'mongoose';
import { livrosRouter } from './routes/livrosRoutes.js';

const app = express();
app.use(express.json());

app.use('/livros', livrosRouter); // Usando o roteador para a rota /livros

mongoose.connect('mongodb://localhost:27017/Livros')
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });

app.listen(3366, () => {
    console.log('Servidor rodando na porta 3366');
});
