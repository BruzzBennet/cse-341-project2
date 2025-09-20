const express = require("express");
const router = express.Router();

const equipController = require("../controllers/equipment");

router.get("/", equipController.getAll);

router.get("/:id", equipController.getSingle);

router.post("/", equipController.createUser);

router.put("/:id", equipController.updateUser);

router.delete("/:id", equipController.deleteUser);

module.exports = router;