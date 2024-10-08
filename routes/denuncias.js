const router = require("express").Router()

const denunciaController = require("../controllers/denunciaController");

// Funções

router.route("/denuncias").post((req, res) => denunciaController.create(req, res));

router.route("/denuncias").get((req, res) => denunciaController.getAll(req,res));

router.route("/denuncias/:id").get((req, res) => denunciaController.get(req,res));

router.route("/denuncias/:id").delete((req, res) => denunciaController.delete(req, res));

router.route("/denuncias/:id").put((req, res) => denunciaController.update(req, res));


module.exports = router;