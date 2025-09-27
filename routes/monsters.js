const express = require("express");
const router = express.Router();

const monController = require("../controllers/monsters");

const {isAuthenticated} = require("../middleware/authenticate");

router.get("/", monController.getAll);

router.get("/:id", isAuthenticated, monController.getSingle);

router.post("/", isAuthenticated, monController.createUser);

router.put("/:id", isAuthenticated, monController.updateUser);

router.delete("/:id", isAuthenticated, monController.deleteUser);

module.exports = router;