import { model, Schema } from "mongoose";

 const emprestimosSchema = new Schema({
    livroemprestado: {type: String, require: true},
    usuario: {type: String, require: true},
    datadevolucao: {type: String, require: true},
 })

 const EmprestimosModel = model('Emprestimos', emprestimosSchema)
 export  {EmprestimosModel}
 
 