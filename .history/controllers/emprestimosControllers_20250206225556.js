import Emprestimo from "../models/emprestimos.js"; // Import correct model

const addEmprestimo = async (req, res) => {
    try {
        const { livroemprestado, usuario, datadevolucao } = req.body;
        
        if (!livroemprestado || !usuario || !datadevolucao) {
            return res.json({
                erro: true,
                mensagem: 'Todos os campos são obrigatórios'
            });
        }
        
        const emprestimo = new Emprestimo({
            livroemprestado,
            usuario,
            datadevolucao
        });

        await emprestimo.save();

        res.json({
            erro: false,
            emprestimo
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const buscarEmprestimo = async (req, res) => {
    try {
        const emprestimos = await Emprestimo.find(); // Use the correct model

        res.json({
            erro: false,
            emprestimos
        });
    } catch (error) {
        console.log(error);
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const buscarEmprestimoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const emprestimo = await Emprestimo.findById(id); // Use the correct model

        if (!emprestimo) {
            return res.json({
                erro: true,
                mensagem: 'Empréstimo não encontrado'
            });
        }

        res.json({
            erro: false,
            emprestimo
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const atualizarEmprestimo = async (req, res) => {
    try {
        const { id } = req.params;
        const emprestimo = await Emprestimo.findByIdAndUpdate(id, req.body, { new: true }); // Use the correct model

        if (!emprestimo) {
            return res.json({
                erro: true,
                mensagem: 'Empréstimo não encontrado'
            });
        }

        res.json({
            erro: false,
            mensagem: 'Empréstimo atualizado com sucesso',
            emprestimo
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const deleteEmprestimo = async (req, res) => {
    try {
        const { id } = req.params;
        const emprestimo = await Emprestimo.findByIdAndDelete(id); // Use the correct model

        if (!emprestimo) {
            return res.json({
                erro: true,
                mensagem: 'Empréstimo não encontrado'
            });
        }

        res.json({
            erro: false,
            mensagem: 'Empréstimo excluído com sucesso'
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

export { addEmprestimo, buscarEmprestimo, buscarEmprestimoPorId, atualizarEmprestimo, deleteEmprestimo };
