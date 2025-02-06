import { LivrosModel } from "../models/livros.js";

// Função para adicionar um livro
const addLivro = async (req, res) => {
    try {
        const { nome, autor, genero } = req.body;

        // Verifica se todos os campos obrigatórios estão presentes
        if (!nome || !autor || !genero) {
            return res.json({
                erro: true,
                mensagem: 'Todos os campos são obrigatórios'
            });
        }

        // Cria o livro e salva no banco de dados
        const livro = new LivrosModel({ nome, autor, genero });
        await livro.save();

        // Retorna o livro adicionado
        res.json(livro);
    } catch (error) {
        // Retorna erro caso ocorra uma exceção
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

// Função para buscar livros
const buscarLivro = async (req, res) => {
    try {
        // Busca todos os livros no banco de dados
        const livros = await LivrosModel.find();

        // Retorna a lista de livros
        res.json({
            erro: false,
            livros
        });
    } catch (error) {
        // Retorna erro caso ocorra uma exceção
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

export { addLivro, buscarLivro };
