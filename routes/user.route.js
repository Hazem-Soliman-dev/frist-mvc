const express = require("express");
const userController = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/", userController.getUsers);

router.get("/:id", userController.getUsersById);

router.post("/", userController.addUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;