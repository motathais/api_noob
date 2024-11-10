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
    /*get: async(req,res) =>{
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
    },*/
get: async (req, res) => {
    try {
        // Receber os parâmetros de consulta (query params)
        const { registrador, fim } = req.query;

        // Criar um filtro dinâmico
        let filter = {};
        if (registrador) filter.registrador = registrador;
        if (fim !== undefined) filter.fim = fim; // Filtro "fim" pode ser null ou qualquer valor

        // Buscar partidas com base no filtro
        const partidas = await PartidaModel.find(filter);

        if (partidas.length === 0) {
            return res.status(404).json({ msg: "Nenhuma partida encontrada com os critérios especificados." });
        }

        res.json(partidas);

    } catch (error) {
        console.error("Erro ao buscar partidas:", error);
        res.status(500).json({ msg: "Erro ao buscar partidas." });
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
