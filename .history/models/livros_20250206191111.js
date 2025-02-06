import {Schema, model} from "mongoose";

const livrosSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true   
    },
    genero: {
        type: String,
        require: true
    }
})

const LivrosModel =  model('Livros', livrosSchema)
export{LivrosModel}