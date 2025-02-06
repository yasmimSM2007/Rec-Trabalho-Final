import {Schema, Model} from "mongoose";

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

const model =  Model('Livros', livrosSchema)
export{model}