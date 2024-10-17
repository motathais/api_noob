const router = require("express").Router()

const jogoController = require("../controllers/jogoController");

const upload = require("../multer/multer");

const {checkToken} = require("../checkToken/checkToken");

// Funções

router.route("/jogos").get((req, res) => jogoController.getAll(req,res));

router.route("/jogos/:id").get((req, res) => jogoController.get(req,res));

router.post("/jogos", upload.single("file"), /*checkToken,*/ jogoController.create);

router.route("/jogos/:id").delete(checkToken, (req, res) => jogoController.delete(req, res)); 

router.put("/jogos/:id", upload.single("file"), /*checkToken,*/ jogoController.update); 


module.exports = router;
