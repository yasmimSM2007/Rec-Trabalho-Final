import express from 'express';
import mongoose from 'mongoose';

const app = express()

mongoose.connect('mongodb://localhost:277/Livros').then(function (){
    console.log('Conectado ao Mongodb')
}) .catch ( err => {
    console.error('Erro ao conectar ao MongoDB:' , err)
})

app.listen(3366, function(){
    console.log('Servidor rodando na porta 3366')
})