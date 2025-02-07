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
        const emprestimo = new emprestimoModel({
            livroemprestado,
            usuario,
            datadevolucao
        })

        await emprestimo.save();

        res.json(emprestimo);
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const buscarEmprestimo = async (req, res) => {
    try {
        const emprestimos = await EmprestimosModel.find();

        res.json({
            erro: false,
            emprestimos
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error.message
        });
    }
};

const buscarEmprestimoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const emprestimo = await EmprestimosModel.findById(id);

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
        const emprestimo = await EmprestimosModel.findByIdAndUpdate(id, req.body, { new: true });

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
        const emprestimo = await EmprestimosModel.findByIdAndDelete(id);

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