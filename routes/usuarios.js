const router = require("express").Router()

const usuarioController = require("../controllers/usuarioController");

const upload = require("../multer/multer");

const {checkToken} = require("../checkToken/checkToken");

// Funções

router.post("/usuarios", upload.single("file"), usuarioController.create);

router.route("/usuarios").get(checkToken, (req, res) => usuarioController.getAll(req, res)); 

router.route("/usuarios/:id").get(checkToken, (req, res) => usuarioController.get(req, res));

router.route("/usuarios/:id").delete(checkToken, (req, res) => usuarioController.delete(req, res)); 

router.put("/usuarios/:id", checkToken, upload.single("file"), (req, res) => usuarioController.update(req, res)); 

router.put("/usuarios/senha/:id", checkToken, (req, res) => usuarioController.updateSenha(req, res));

module.exports = router;



