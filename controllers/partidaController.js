const {Partida : PartidaModel, Partida } = require("../models/Partida");

const partidaController = {

    create: async(req, res) =>{
        try {
            const partida = {
                usuarios: req.body.usuarios,
                jogo: req.body.jogo,
                explicacao: req.body.explicacao,
                inicio: req.body.inicio,
                registrador: req.body.registrador
                //fim: req.body.fim,
                //vencedor: req.body.vencedor,
                //pontuacao: req.body.pontuacao
            };
            const response = await PartidaModel.create(partida);

            res.status(201).json({response, msg: "Partida registrada com sucesso!"});

        } catch(error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try{
            const partidas = await PartidaModel.find()

            res.json(partidas);
        }catch(error){
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const partida = await PartidaModel.findById(id);

            if(!partida){
                res.status(404).json({msg: "Partida não encontrada!"});
                return;
            }

            res.json(partida);

        }catch(error) {
            console.log(error)
        }
    },
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const partida = await PartidaModel.findById(id);

            if (!partida){
                res.status(404).json({ msg: "Partida não encontrada!"});
                return;
            }

        const deletedPartida = await PartidaModel.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedPartida, msg: "Partida excluida com sucesso!"});

        }catch (error){
            console.log(error)
        }
    },
    update : async(req,res) =>{
        const id = req.params.id

        const partida = {
            /*usuarios: req.body.usuarios,
            jogo: req.body.jogo,
            vencedor: req.body.vencedor,
            duracao: req.body.duracao*/
            fim: req.body.fim,
            vencedor: req.body.vencedor,
            pontuacao: req.body.pontuacao
        };

        const updatedPartida = await PartidaModel.findByIdAndUpdate(id, partida)

        if(!updatedPartida) {
            res.status(404).json({msg: "Partida não encontrada!"});
            return;
        }

        res.status(200).json({partida, msg: "Partida atualizada com sucesso!"}); 

        },

    };


module.exports = partidaController;
