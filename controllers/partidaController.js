const { Partida: PartidaModel, Partida } = require("../models/Partida");

const partidaController = {

    create: async (req, res) => {
        try {
            const partida = {
                usuarios: req.body.usuarios,
                jogo: req.body.jogo,
                explicacao: req.body.explicacao,
                inicio: req.body.inicio,
                registrador: req.body.registrador,
                fim: ""
            };
            const response = await PartidaModel.create(partida);

            res.status(201).json({ response, msg: "Partida registrada com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const partidas = await PartidaModel.find()

            res.json(partidas);
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const { registrador, fim } = req.query;

            // Criar um filtro dinâmico
            let filter = {};

            if (registrador) {
                filter.registrador = registrador;
            }

            if (fim !== undefined) {
                if (fim === 'null') {
                    // Filtrar onde 'fim' é null, vazio ou não existe
                    filter.$or = [
                        { fim: null },
                        { fim: '' },
                        { fim: { $exists: false } }
                    ];
                } else {
                    // Filtrar por um valor específico de 'fim'
                    filter.fim = fim;
                }
            }

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
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const partida = await PartidaModel.findById(id);

            if (!partida) {
                res.status(404).json({ msg: "Partida não encontrada!" });
                return;
            }

            const deletedPartida = await PartidaModel.findByIdAndDelete(id);

            res
                .status(200)
                .json({ deletedPartida, msg: "Partida excluida com sucesso!" });

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            // Recupera os dados existentes da partida
            const partidaExistente = await Partida.findById(id);
            if (!partidaExistente) {
                return res.status(404).json({ msg: "Partida não encontrada" });
            }

            // Campos a serem atualizados
            const atualizacoes = {
                fim: req.body.fim,
                vencedor: req.body.vencedor,
                pontuacao: req.body.pontuacao,
            };

            if (req.body.fim && new Date(req.body.fim) <= new Date(partidaExistente.inicio)) {
                return res.status(400).json({ msg: "A data de fim deve ser posterior à data de início." });
            }


            // Calcula a duração se o campo 'fim' for enviado no corpo da requisição
            if (req.body.fim && partidaExistente.inicio) {
                const inicio = new Date(partidaExistente.inicio);
                const fim = new Date(req.body.fim);
                const duracaoHoras = Math.abs((fim - inicio) / (1000 * 60 * 60)); // Diferença em horas
                atualizacoes.duracao = duracaoHoras;
            }

            // Atualiza o documento no banco de dados
            const partidaAtualizada = await Partida.findByIdAndUpdate(id, atualizacoes, { new: true });

            res.status(200).json({ partidaAtualizada, msg: "Partida atualizada com sucesso!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Erro ao atualizar a partida" });
        }
    },

};

module.exports = partidaController;
