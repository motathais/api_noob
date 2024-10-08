const router = require("express").Router()

const usuarioController = require("../controllers/usuarioController");

const upload = require("../multer/multer");

// Funções

router.post("/usuarios", upload.single("file"), usuarioController.create);

router.route("/usuarios").get((req,res) => usuarioController.getAll(req,res));

router.route("/usuarios/:id").get((req,res) =>usuarioController.get(req, res));

router.route("/usuarios/:id").delete((req,res) =>usuarioController.delete(req, res));

router.put("/usuarios/:id", upload.single("file"), usuarioController.update);


module.exports = router;



