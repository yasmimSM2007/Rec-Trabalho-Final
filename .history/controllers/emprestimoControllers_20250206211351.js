import emprestimoModel from "../models/emprestimo.js";

const addEmprestimo = async(req, res)=>{
    try{
        const {livroemprestado, usuario, datadevolucao} = req.body
        if (!livroemprestado|| !usuario|| !datadevolucao){
            returnres.json({
                erro: true,
                mensagem: 'Todos od campos são obrigatórios'
            })
        }
        const emprestimo = new Empre()
    } catch(error) {
}