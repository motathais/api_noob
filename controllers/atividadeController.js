const {Atividade : AtividadeModel, Atividade } = require("../models/Atividade");

const atividadeController = {

    create: async(req, res) =>{
        try {
            const atividade = {
                usuarios: req.body.usuarios,
                jogo: req.body.jogo,
                vencedor: req.body.vencedor,
                duracao: req.body.duracao
            };
            const response = await AtividadeModel.create(atividade);

            res.status(201).json({response, msg: "Partida registrada com sucesso!"});

        } catch(error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try{
            const atividades = await AtividadeModel.find()

            res.json(atividades);
        }catch(error){
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const atividade = await AtividadeModel.findById(id);

            if(!atividade){
                res.status(404).json({msg: "Partida não encontrada!"});
                return;
            }

            res.json(atividade);

        }catch(error) {
            console.log(error)
        }
    },
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const atividade = await AtividadeModel.findById(id);

            if (!atividade){
                res.status(404).json({ msg: "Partida não encontrada!"});
                return;
            }

        const deletedAtividade = await AtividadeModel.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedAtividade, msg: "Partida excluida com sucesso!"});

        }catch (error){
            console.log(error)
        }
    },
    update : async(req,res) =>{
        const id = req.params.id

        const atividade = {
            usuarios: req.body.usuarios,
            jogo: req.body.jogo,
            vencedor: req.body.vencedor,
            duracao: req.body.duracao
        };

        const updatedAtividade = await AtividadeModel.findByIdAndUpdate(id, atividade)

        if(!updatedAtividade) {
            res.status(404).json({msg: "Partida não encontrada!"});
            return;
        }

        res.status(200).json({atividade, msg: "Partida atualizada com sucesso!"}); 

        },

    };


module.exports = atividadeController;