const router = require("express").Router()

const jogoController = require("../controllers/jogoController");

// Funções

router.route("/jogos").post((req, res) => jogoController.create(req, res));

router.route("/jogos").get((req, res) => jogoController.getAll(req,res));

router.route("/jogos/:id").get((req, res) => jogoController.get(req,res));

router.route("/jogos/:id").delete((req, res) => jogoController.delete(req, res));

router.route("/jogos/:id").put((req, res) => jogoController.update(req, res));


module.exports = router;