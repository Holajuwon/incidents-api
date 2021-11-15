const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers");
const { createUserShema, loginUserSchema } = require("../db/schemas/user");
const validateInput = require("../middlewares/requestValidator/validateInput");
// const validateLogin = require("../middlewares/requestValidator/validateLogin");
// const validateSignup = require("../middlewares/requestValidator/validateSignup");
const verifyLogin = require("../middlewares/verifyLogin");
const verifySignup = require("../middlewares/verifySignup");

router
  .post(
    "/signup",
    [validateInput(createUserShema, "body"), verifySignup],
    createUser
  )
  .post("/login", [validateInput(loginUserSchema, "body"), verifyLogin], login);

module.exports = router;
