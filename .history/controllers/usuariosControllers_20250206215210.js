import { UsuariosModel } from "../models/usuarios.js";


const addUsuario = async (req, res) => {
    try {
        const { nome, email, historicoemprestimo } = req.body;

        
        if (!nome || !email || !historicoemprestimo) {
            return res.json({
                erro: true,
                mensagem: 'Todos os campos são obrigatórios'
            });
        }

        
        const usuario = new UsuariosModel({ nome, email, historicoemprestimo });
        await usuario.save();

        res.json(usuario);
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const buscarUsuario = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find();

        res.json({
            erro: false,
            usuarios
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const buscarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioModel.findById(id);

        if (!usuario) {
            return res.json({
                erro: true,
                mensagem: 'Usuário não encontrado'
            });
        }

        res.json({
            erro: false,
            usuario
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!usuario) {
            return res.json({
                erro: true,
                mensagem: 'Usuário não encontrado'
            });
        }

        res.json({
            erro: false,
            mensagem: 'Usuário atualizado com sucesso',
            usuario
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioModel.findByIdAndDelete(id);

        if (!usuario) {
            return res.json({
                erro: true,
                mensagem: 'Usuário não encontrado'
            });
        }

        res.json({
            erro: false,
            mensagem: 'Usuário excluído com sucesso'
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

export { addUsuario, buscarUsuario, buscarUsuarioPorId, atualizarUsuario, deleteUsuario };