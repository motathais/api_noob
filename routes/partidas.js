const router = require("express").Router()

const partidaController = require("../controllers/partidaController");

const {checkToken} = require("../checkToken/checkToken");

// Funções

router.route("/partidas").post(checkToken, (req, res) => partidaController.create(req, res));

router.route("/partidas").get(checkToken, (req, res) => partidaController.getAll(req, res)); 

router.route("/partidas").get(checkToken, (req, res) => partidaController.get(req, res)); 

router.route("/partidas/:id").delete(checkToken, (req, res) => partidaController.delete(req, res));

router.route("/partidas/:id").put(checkToken, (req, res) => partidaController.update(req, res));


module.exports = router;
