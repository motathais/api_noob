const {Avaliacao : AvaliacaoModel, Avaliacao } = require("../models/Avaliacao");

const avaliacaoController = {

    create: async(req, res) =>{
        try {
            const avaliacao = {
                usuario: req.body.usuario,
                jogo: req.body.jogo,
                nota: req.body.nota,
                comentario: req.body.comentario
            };
            const response = await AvaliacaoModel.create(avaliacao);

            res.status(201).json({response, msg: "Avaliação registrada com sucesso!"});

        } catch(error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try{
            const avaliacoes = await AvaliacaoModel.find()

            res.json(avaliacoes);
        }catch(error){
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const avaliacao = await AvaliacaoModel.findById(id);

            if(!avaliacao){
                res.status(404).json({msg: "Avaliação não encontrada!"});
                return;
            }

            res.json(avaliacao);

        }catch(error) {
            console.log(error)
        }
    },
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const avaliacao = await AvaliacaoModel.findById(id);

            if (!avaliacao){
                res.status(404).json({ msg: "Avaliação não encontrada!"});
                return;
            }

        const deletedAvaliacao = await AvaliacaoModel.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedAvaliacao, msg: "Avaliação excluida com sucesso!"});

        }catch (error){
            console.log(error)
        }
    },
    update : async(req,res) =>{
        const id = req.params.id

        const avaliacao = {
            usuario: req.body.usuario,
            jogo: req.body.jogo,
            nota: req.body.nota,
            comentario: req.body.comentario
        };

        const updatedAvaliacao = await AvaliacaoModel.findByIdAndUpdate(id, avaliacao)

        if(!updatedAvaliacao) {
            res.status(404).json({msg: "Avaliação não encontrada!"});
            return;
        }

        res.status(200).json({avaliacao, msg: "Avaliação atualizada com sucesso!"}); 

        },

    };


module.exports = avaliacaoController;