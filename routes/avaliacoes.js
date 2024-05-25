const router = require("express").Router()

const avaliacaoController = require("../controllers/avaliacaoController");

// Funções

router.route("/avaliacoes").post((req, res) => avaliacaoController.create(req, res));

router.route("/avaliacoes").get((req, res) => avaliacaoController.getAll(req,res));

router.route("/avaliacoes/:id").get((req, res) => avaliacaoController.get(req,res));

router.route("/avaliacoes/:id").delete((req, res) => avaliacaoController.delete(req, res));

router.route("/avaliacoes/:id").put((req, res) => avaliacaoController.update(req, res));


module.exports = router;