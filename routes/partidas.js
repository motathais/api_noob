const router = require("express").Router()

const partidaController = require("../controllers/partidaController");

// Funções

router.route("/partidas").post((req, res) => partidaController.create(req, res));

router.route("/partidas").get((req, res) => partidaController.getAll(req,res));

router.route("/partidas/:id").get((req, res) => partidaController.get(req,res));

router.route("/partidas/:id").delete((req, res) => partidaController.delete(req, res));

router.route("/partidas/:id").put((req, res) => partidaController.update(req, res));


module.exports = router;