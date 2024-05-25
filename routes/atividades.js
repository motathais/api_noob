const router = require("express").Router()

const atividadeController = require("../controllers/atividadeController");

// Funções

router.route("/atividades").post((req, res) => atividadeController.create(req, res));

router.route("/atividades").get((req, res) => atividadeController.getAll(req,res));

router.route("/atividades/:id").get((req, res) => atividadeController.get(req,res));

router.route("/atividades/:id").delete((req, res) => atividadeController.delete(req, res));

router.route("/atividades/:id").put((req, res) => atividadeController.update(req, res));


module.exports = router;