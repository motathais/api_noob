const router = require("express").Router()

const denunciaController = require("../controllers/denunciaController");

const {checkToken} = require("../checkToken/checkToken");

// Funções

/*router.route("/denuncias").post((req, res) => denunciaController.create(req, res));

router.route("/denuncias").get((req, res) => denunciaController.getAll(req,res));

router.route("/denuncias/:id").get((req, res) => denunciaController.get(req,res));

router.route("/denuncias/:id").delete((req, res) => denunciaController.delete(req, res));

router.route("/denuncias/:id").put((req, res) => denunciaController.update(req, res));*/

router.route("/denuncias")
    .post(checkToken, (req, res) => denunciaController.create(req, res)) // Criar uma denúncia
    .get(checkToken, (req, res) => denunciaController.getAll(req, res)); // Listar todas as denúncias

router.route("/denuncias/:id")
    .get(checkToken, (req, res) => denunciaController.get(req, res)) // Obter uma denúncia específica
    .delete(checkToken, (req, res) => denunciaController.delete(req, res)) // Deletar uma denúncia
    .put(checkToken, (req, res) => denunciaController.update(req, res));


module.exports = router;