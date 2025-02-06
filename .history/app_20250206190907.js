import express from 'express';
import mongoose from 'mongoose';
import livrosRouter from './routes/livrosRoutes.js';


const app = express()
app.use(express.json())

app.use('/livros', livrosRoutes)

mongoose.connect('mongodb://localhost:27017/Livros').then(function (){
    console.log('Conectado ao Mongodb')
}) .catch ( err => {
    console.error('Erro ao conectar ao MongoDB:' , err)
})

app.listen(3366, function(){
    console.log('Servidor rodando na porta 3366')
})