const Usuarios = require("../models/Usuario");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController={

    // enviando as informações do formulário e validando-as
    post: async(req, res) =>{

        const { apelido, senha } = req.body;
    
        // conferindo se o apelido e a senha estão preenchidos
        if (!apelido || !senha) {
            return res.status(422).json({ msg: 'Por favor, preencha as informações para login!' });
        }

        const usuario = await Usuarios.findOne({ apelido });
        
        // conferindo se o usuário existe no banco
        if (!usuario) {
            return res.status(404).json({ msg: 'Nome de usuário ou senha invalido, verifique!' });
        }

        const confereSenha = await bcrypt.compare(senha, usuario.senha);

        if (!confereSenha) {
            return res.status(422).json({ msg: 'Senha inválida' });
        }
        
        // Gerar um token JWT
        const token = jwt.sign({ id: usuario._id }, 'secret', { expiresIn: '1h' });

        res.status(200).json({ token, usuario: { id: usuario._id, apelido: usuario.apelido, nome: usuario.nome }, msg: "Usuário logado com sucesso!" });      
    }
};

module.exports = loginController;
