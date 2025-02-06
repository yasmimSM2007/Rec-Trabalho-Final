import { LivrosModel } from "../models/livros.js";


const addLivro = async (req, res) => {
    try {
        const { nome, autor, genero } = req.body;

        
        if (!nome || !autor || !genero) {
            return res.json({
                erro: true,
                mensagem: 'Todos os campos são obrigatórios'
            });
        }

        
        const livro = new LivrosModel({ nome, autor, genero });
        await livro.save();

        
        res.json(livro);
    } catch (error) {
        
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};


const buscarLivro = async (req, res) => {
    try {
        
        const livros = await LivrosModel.find();

        
        res.json({
            erro: false,
            livros
        });
    } catch (error) {
        
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

export { addLivro, buscarLivro };
