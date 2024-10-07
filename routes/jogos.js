const router = require("express").Router()

const jogoController = require("../controllers/jogoController");

const upload = require("../multer/multer");

// Funções

router.post("/jogos", upload.single("file"), jogoController.create);

router.route("/jogos").get((req, res) => jogoController.getAll(req,res));

router.route("/jogos/:id").get((req, res) => jogoController.get(req,res));

router.route("/jogos/:id").delete((req, res) => jogoController.delete(req, res));

//router.route("/jogos/:id").put((req, res) => jogoController.update(req, res));

router.put("/jogos/:id", upload.single("file"), jogoController.update);


module.exports = router;
