import { Schema } from "mongoose";

 

 const emprestimoSchema = new Schema({
    nome: {type: String, require: true},
    email: {type: String, require: true},
    historicodeemprestimos: {type: String, require: true},
 })

 const Usuario = model('Emprestimo', emprestimoSchema)

 export default {Emprestimo}