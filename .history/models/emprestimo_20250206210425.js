import { Schema } from "mongoose";

 

 const emprestimoSchema = new Schema({
    livroemprestado: {type: String, require: true},
    usuario: {type: String, require: true},
    datadevolucao: {type: String, require: true},
 })

 const Usuario = model('Emprestimo', emprestimoSchema)

 export default {Emprestimo}