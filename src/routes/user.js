const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers");
const verifyLogin = require("../middlewares/verifyLogin");

router.post("/signup", createUser).post("/login", verifyLogin, login);

module.exports = router;
