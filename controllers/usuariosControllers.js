import { UsuariosModel } from "../models/usuarios.js"; 

const addUsuario = async (req, res) => {
    try {
        const { livroemprestado, usuario, datadevolucao } = req.body; 
        
        
        if (!livroemprestado || !usuario || !datadevolucao) {
            return res.json({
                erro: true,
                mensagem: 'Todos os campos são obrigatórios'
            });
        }

        
        const usuarioDoc = new UsuariosModel({
            livroemprestado,
            usuario,
            datadevolucao
        });

        await usuarioDoc.save();

        res.json({
            erro: false,
            usuario: usuarioDoc 
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const buscarUsuario = async (req, res) => {
    try {
        const usuarios = await UsuariosModel.find(); 

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
        const usuario = await UsuariosModel.findById(id); 

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
        const usuario = await UsuariosModel.findByIdAndUpdate(id, req.body, { new: true }); 

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
        const usuario = await UsuariosModel.findByIdAndDelete(id); 

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
