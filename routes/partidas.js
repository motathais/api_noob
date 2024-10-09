const router = require("express").Router()

const partidaController = require("../controllers/partidaController");

const {checkToken} = require("../checkToken/checkToken");

// Funções

/*router.route("/partidas").post((req, res) => partidaController.create(req, res));

router.route("/partidas").get((req, res) => partidaController.getAll(req,res));

router.route("/partidas/:id").get((req, res) => partidaController.get(req,res));

router.route("/partidas/:id").delete((req, res) => partidaController.delete(req, res));

router.route("/partidas/:id").put((req, res) => partidaController.update(req, res));*/

router.route("/partidas")
    .post(checkToken, (req, res) => partidaController.create(req, res)) 
    .get(checkToken, (req, res) => partidaController.getAll(req, res)); 

router.route("/partidas/:id")
    .get(checkToken, (req, res) => partidaController.get(req, res)) 
    .delete(checkToken, (req, res) => partidaController.delete(req, res)) 
    .put(checkToken, (req, res) => partidaController.update(req, res));


module.exports = router;