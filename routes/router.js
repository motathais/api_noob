const router = require("express").Router()

// Usuarios router

const usuariosRouter = require("./usuarios");

router.use("/", usuariosRouter);


// Jogos routes

const jogosRouter = require("./jogos");

router.use("/", jogosRouter);

// Atividades routes

const partidasRouter = require("./partidas");

router.use("/", partidasRouter);



// Denuncia Router

const denunciasRouter = require("./denuncias");

router.use("/", denunciasRouter);


// Avaliacoes Router

const avaliacoesRouter = require("./avaliacoes");

router.use("/", avaliacoesRouter);


// Login Router

const loginRouter = require("./login");

router.use("/", loginRouter);

module.exports = router;


