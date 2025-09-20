const express = require("express");
const router = express.Router();

const monController = require("../controllers/monsters");

router.get("/", monController.getAll);

router.get("/:id", monController.getSingle);

router.post("/", monController.createUser);

router.put("/:id", monController.updateUser);

router.delete("/:id", monController.deleteUser);

module.exports = router;