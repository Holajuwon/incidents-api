const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers");
const validateLogin = require("../middlewares/requestValidator/validateLogin");
const validateSignup = require("../middlewares/requestValidator/validateSignup");
const verifyLogin = require("../middlewares/verifyLogin");
const verifySignup = require("../middlewares/verifySignup");

router
  .post("/signup", [validateSignup, verifySignup], createUser)
  .post("/login", [validateLogin, verifyLogin], login);

module.exports = router;
