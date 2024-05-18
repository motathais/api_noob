const router = require("express").Router()

// Usuarios router

const usuariosRouter = require("./usuarios");

router.use("/", usuariosRouter);


// Jogos routes

const jogosRouter = require("./jogos");

router.use("/", jogosRouter);

// Atividades routes

const atividadesRouter = require("./atividades");

router.use("/", atividadesRouter);

// Avaliacoes Router

const avaliacoesRouter = require("./avaliacoes");

router.use("/", avaliacoesRouter);


// Login Router

const loginRouter = require("./login");

router.use("/", loginRouter);


/*
// Imagens router

const imagensRouter = require("./imagem");

router.use("/", imagensRouter);

// Imagens usuario router

const imgUsuarioRouter = require("./imagemUsuario");

router.use("/", imgUsuarioRouter);
*/

module.exports = router;


