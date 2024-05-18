const router = require("express").Router()

const usuarioController = require("../controllers/usuarioController");

const upload = require("../config/multer");

// Funções

//router.route("/usuarios").post((req, res) => usuarioController.create(req,res));

router.post("/usuarios", upload.single("file"), usuarioController.create);

router.route("/usuarios").get((req,res) => usuarioController.getAll(req,res));

router.route("/usuarios/:id").get((req,res) =>usuarioController.get(req, res));

router.route("/usuarios/:id").delete((req,res) =>usuarioController.delete(req, res));

router.route("/usuarios/:id").put((req,res) =>usuarioController.update(req, res));

module.exports = router;




/*const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const imagemController = require("../controllers/imagemController");

router.post("/imagensUsuario", upload.single("file"), imagemController.create);

module.exports = router;*/


