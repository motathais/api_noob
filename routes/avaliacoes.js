const router = require("express").Router()

const avaliacaoController = require("../controllers/avaliacaoController");

const { checkToken } = require("../checkToken/checkToken");

// Funções

router.route("/avaliacoes").get((req, res) => avaliacaoController.getAll(req, res));

router.route("/avaliacoes/:id").get((req, res) => avaliacaoController.get(req, res));

router.route("/avaliacoes").post(checkToken, (req, res) => avaliacaoController.create(req, res));

router.route("/avaliacoes/:id").delete(checkToken, (req, res) => avaliacaoController.delete(req, res));

router.route("/avaliacoes/:id").put(checkToken, (req, res) => avaliacaoController.update(req, res));

module.exports = router;