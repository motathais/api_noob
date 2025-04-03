const router = require("express").Router();

const loginController = require("../controllers/loginController");

// Funções

router.route("/login").post((req, res) => loginController.post(req, res));

module.exports = router;



