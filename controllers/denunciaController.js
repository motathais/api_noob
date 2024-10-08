const {Denuncia : DenunciaModel, Denuncia } = require("../models/Denuncia");

const denunciaController = {

    create: async(req, res) =>{
        try {
            const denuncia = {
                registro: req.body.registro,
                descricao: req.body.descricao,
            };
            const response = await DenunciaModel.create(denuncia);

            res.status(201).json({response, msg: "Denúncia registrada com sucesso!"});

        } catch(error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try{
            const denuncias = await DenunciaModel.find()

            res.json(denuncias);
        }catch(error){
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const denuncia = await DenunciaModel.findById(id);

            if(!denuncia){
                res.status(404).json({msg: "Denúncia não encontrada!"});
                return;
            }

            res.json(denuncia);

        }catch(error) {
            console.log(error)
        }
    },
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const denuncia = await DenunciaModel.findById(id);

            if (!denuncia){
                res.status(404).json({ msg: "Denúncia não encontrada!"});
                return;
            }

        const deletedDenuncia = await DenunciaModel.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedDenuncia, msg: "Denúncia excluída com sucesso!"});

        }catch (error){
            console.log(error)
        }
    },
    update : async(req,res) =>{
        const id = req.params.id

        const denuncia = {
            registro: req.body.registro,
            descricao: req.body.descricao,
        };

        const updatedDenuncia = await DenunciaModel.findByIdAndUpdate(id, denuncia)

        if(!updatedDenuncia) {
            res.status(404).json({msg: "Denúncia não encontrada!"});
            return;
        }

        res.status(200).json({denuncia, msg: "Denúncia atualizada com sucesso!"}); 

        },

    };


module.exports = denunciaController;
