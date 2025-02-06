import { LivrosModel } from "../models/livros";

const addLivro = (req, res) => {
    const{nome, autor, genero} = req.body;
    if(!nome || !autor || !genero){
        return res.json({
            erro: true,
            mensagem: 'Todos os campos são obrigatórios'
        })
    }
    const livros = new LivrosModel({nome, autor, turma})
    
}