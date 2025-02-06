import { LivrosModel } from "../models/livros";

const addLivro = async (req, res) => {
    const{nome, autor, genero} = req.body;
    if(!nome || !autor || !genero){
        return res.json({
            erro: true,
            mensagem: 'Todos os campos são obrigatórios'
        })
    }
    const livro = new LivrosModel({nome, autor, turma})
    await livro.save();
    res.json(livro)
} catch (error){
    res.json({
        erro: true,
        mensagem: error
        
    })


}
const buscarLivro = () => {
    try{
const livros = await LivrosModel.find()
res.json({
    erro: false,
    livros
})
    }catch(error){
        res.json({
            erro: true,
            mensagem: error
        })

    }
}
export{addLivro, buscarLivro}