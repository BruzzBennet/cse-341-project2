const express = require("express");
const router = express.Router();

const equipController = require("../controllers/equipment");

const {isAuthenticated} = require("../middleware/authenticate");

router.get("/", equipController.getAll);

router.get("/:id", equipController.getSingle);

router.post("/", isAuthenticated, equipController.createUser);

router.put("/:id", isAuthenticated, equipController.updateUser);

router.delete("/:id", isAuthenticated, equipController.deleteUser);

module.exports = router;