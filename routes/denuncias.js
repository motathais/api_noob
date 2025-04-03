const router = require("express").Router()

const denunciaController = require("../controllers/denunciaController");

const { checkToken } = require("../checkToken/checkToken");

// Funções

router.route("/denuncias").post(checkToken, (req, res) => denunciaController.create(req, res));

router.route("/denuncias").get(checkToken, (req, res) => denunciaController.getAll(req, res));

router.route("/denuncias/:id").get(checkToken, (req, res) => denunciaController.get(req, res));

router.route("/denuncias/:id").delete(checkToken, (req, res) => denunciaController.delete(req, res));

router.route("/denuncias/:id").put(checkToken, (req, res) => denunciaController.update(req, res));


module.exports = router;