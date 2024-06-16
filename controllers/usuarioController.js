const  Usuarios = require("../models/Usuario");

const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken')

const usuarioController={
    // função para criar usuário via POST
    create : async(req, res) => {
        try {
            
            // recebendo os parametros do body
            const {nome} = req.body;
            const {apelido} = req.body;
            const {nascimento} = req.body;
            const {email} = req.body;
            const {senha} = req.body;
            //const file = req.file;
            let file = req.file;

            // configurando hash de senha
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(senha,salt);
            
            // criando o usuario
            const usuarios = new Usuarios({
                nome,
                apelido,
                nascimento,
                email,
                senha:hash,
                //src: file.path
                src: file ? file.path : null
            });
    
            // validando se usuário e apelido existem
            const usuarioExiste = await Usuarios.findOne({email: email});
    
            const apelidoExiste = await Usuarios.findOne({apelido: apelido});
    
             if(usuarioExiste){
                res.status(401).json({message: "O email inserido está em uso, por gentileza utilize outro"});
                return;
             }
    
             if(apelidoExiste){
                res.status(401).json({message: "O apelido inserido já está em uso, por gentileza utilize outro"});
                return;
             }
    
             // salvando o usuário
            await usuarios.save();
    
            /*res.json({
                usuarios, msg: "Usuário cadastrado com sucesso!"
            })*/
            res.status(200).json({usuarios, message: "Usuário criado com sucesso!"});
    
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Erro ao processar a requisição." });
        }
    },
    // função para buscar todos os usuários da lista via GET
        getAll: async (req, res) => {
            try{
                const usuarios = await Usuarios.find()
    
                res.json(usuarios);
            }catch(error){
                console.log(error)
            }
        },
    // função para buscar apenas um usuário passando o ID via GET
        get: async(req,res) =>{
            try {
                //id => URL == GET
                const id = req.params.id
                const usuario = await Usuarios.findById(id);
    
                if(!usuario){
                    res.status(404).json({msg: "Usuario não encontrado"});
                    return;
                }
    
                res.json(usuario);
    
            }catch(error) {
                console.log(error)
            }
        },
    // função para deletar o usuário passando ID via DELETE
        delete: async(req,res) => {
            try{
                const id = req.params.id;
    
                const usuario = await Usuarios.findById(id);
    
                if (!usuario){
                    res.status(404).json({ msg: "Usuário não encontrado!"});
                    return;
                }
    
            const deletedUsuario = await Usuarios.findByIdAndDelete(id);
    
            res
                .status(200)
                .json({ deletedUsuario, msg: "Usuário excluido com sucesso"});
    
            }catch (error){
                console.log(error)
            }
        },
    // atualizando o usuário passando o ID via PUT
        update : async(req,res) =>{
            const id = req.params.id

             // recebendo os parametros do body
             const {nome} = req.body;
             const {apelido} = req.body;
             const {nascimento} = req.body;
             const {email} = req.body;
             //const {senha} = req.body;
             //const file = req.file;
             let file = req.file;
 
             // configurando hash de senha
             const salt = await bcrypt.genSalt(12);
             const hash = await bcrypt.hash(senha,salt);
    
            const usuario = {
                nome,
                apelido,
                nascimento,
                email,
                //senha:hash,
                //src: file.path
                src: file ? file.path : null
            };
    
            const updatedUsuario = await Usuarios.findByIdAndUpdate(id, usuario)
    
            if(!updatedUsuario) {
                res.status(404).json({msg: "Usuário não encontrado."});
                return;
            }
    
            res.status(200).json({usuario, msg: "Usuário atualizado com sucesso."}); 
    
            }
};


module.exports = usuarioController; 
