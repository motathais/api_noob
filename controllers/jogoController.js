const {Jogo : JogoModel, Jogo } = require("../models/Jogo");
const cloudinary = require('../cloudinary/cloudinary');

const jogoController = {

    create: async(req, res) =>{
        try {
            
            // recebendo os parametros do body
            const {titulo} = req.body;
            const {ano} = req.body;
            const {idade} = req.body;
            const {designer} = req.body;
            const {artista} = req.body;
            const {editora} = req.body;
            const {digital} = req.body;
            const {categoria} = req.body;
            const {componentes} = req.body;
            const {descricao} = req.body;
            //const file = req.file;
            let file = req.file;


             // Upload da imagem para o Cloudinary
              let capa;
              if (file) {
                const result = await new Promise((resolve, reject) => {
                  cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                  }).end(file.buffer);
                });
                capa = result.secure_url;
              }

            // criando o usuario
          const jogos = new Usuarios({
            titulo,
            ano,
            idade,
            designer,
            artista,
            editora,
            digital,
            categoria,
            componentes,
            descricao,  
            capa: capa || null
          });

          // salvando o jogo
          await jogos.save();

         res.status(201).json({jogos, msg: "Jogo criado com sucesso!"});

        } catch(error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try{
            const jogos = await JogoModel.find()

            res.json(jogos);
        }catch(error){
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const jogo = await JogoModel.findById(id);

            if(!jogo){
                res.status(404).json({msg: "Jogo não encontrado!"});
                return;
            }

            res.json(jogo);

        }catch(error) {
            console.log(error)
        }
    },
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const jogo = await JogoModel.findById(id);

            if (!jogo){
                res.status(404).json({ msg: "Jogo não encontrado!"});
                return;
            }

        const deletedJogo = await JogoModel.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedJogo, msg: "Jogo excluido com sucesso!"});

        }catch (error){
            console.log(error)
        }
    },
    update : async(req,res) =>{
        const id = req.params.id

        const jogo = {
            titulo: req.body.titulo,
            ano: req.body.ano,
            idade: req.body.idade,
            designer: req.body.designer,
            artista: req.body.artista,
            editora: req.body.editora,
            digital: req.body.digital,
            categoria: req.body.categoria,
            componentes: req.body.componentes,
            descricao: req.body.descricao
        };

        const updatedJogo = await JogoModel.findByIdAndUpdate(id, jogo)

        if(!updatedJogo) {
            res.status(404).json({msg: "Jogo não encontrado!"});
            return;
        }

        res.status(200).json({jogo, msg: "Jogo atualizado com sucesso!"}); 

        },

    };


module.exports = jogoController;
