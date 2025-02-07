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
            mensagem: error
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
            mensagem: error
        });
    }
};


const buscarLivroPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const livro = await LivrosModel.findById(id);

        if (!livro) {
            return res.json({
                erro: true,
                mensagem: 'Livro não encontrado'
            });
        }

        res.json({
            erro: false,
            livro
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        });
    }
};


const atualizarLivro = async (req, res) => {
    try {
        const { id } = req.params;
        const livro = await LivrosModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!livro) {
            return res.json({
                erro: true,
                mensagem: 'Livro não encontrado'
            });
        }

        res.json({
            erro: false,
            mensagem: 'Livro atualizado com sucesso',
            livro
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        });
    }
};


const deleteLivro = async (req, res) => {
    try {
        const { id } = req.params;
        const livro = await LivrosModel.findByIdAndDelete(id);

        if (!livro) {
            return res.json({
                erro: true,
                mensagem: 'Livro não encontrado'
            });
        }

        res.json({
            erro: false,
            mensagem: 'Livro excluído com sucesso'
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        });
    }
};

export { addLivro, buscarLivro, buscarLivroPorId, atualizarLivro, deleteLivro };
