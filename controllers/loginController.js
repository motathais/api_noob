/*const Usuarios = require("../models/Usuario");
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

        res.status(200).json({ token, usuario: { id: usuario._id, nome: usuario.nome, apelido: usuario.apelido, nascimento: usuario.nascimento, email: usuario.email, src: usuario.src}, msg: "Usuário logado com sucesso!" });      
    }
};

module.exports = loginController;*/

const Usuarios = require("../models/Usuario");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Utilize a variável de ambiente para armazenar a chave secreta
const secret = process.env.SECRET || 'fallback_secret_key';

const loginController = {

    post: async (req, res) => {
        try {
            const { apelido, senha } = req.body;

            // Verifica se o apelido e a senha foram fornecidos
            if (!apelido || !senha) {
                return res.status(400).json({ msg: 'Por favor, preencha as informações para login!' });
            }

            const usuario = await Usuarios.findOne( `@${apelido}` );

            // Verifica se o usuário existe no banco de dados
            if (!usuario) {
                return res.status(404).json({ msg: 'Nome de usuário ou senha inválido!' });
            }

            // Verifica se a senha está correta
            const confereSenha = await bcrypt.compare(senha, usuario.senha);

            if (!confereSenha) {
                return res.status(401).json({ msg: 'Nome de usuário ou senha inválido!' });
            }

            // Gera um token JWT válido por 1 hora
            const token = jwt.sign({ id: usuario._id }, secret/*, { expiresIn: '1h' }*/);

            // Envia o token e as informações do usuário como resposta
            return res.status(200).json({
                token,
                usuario: {
                    id: usuario._id,
                    //nome: usuario.nome,
                    //apelido: usuario.apelido,
                    //nascimento: usuario.nascimento,
                    //email: usuario.email,
                    //src: usuario.src
                },
                msg: "Usuário logado com sucesso!"
            });

        } catch (error) {
            // Captura qualquer erro e retorna uma mensagem de erro genérica
            return res.status(500).json({ msg: 'Erro interno no servidor. Tente novamente mais tarde.' });
        }
    }
};

module.exports = loginController;

