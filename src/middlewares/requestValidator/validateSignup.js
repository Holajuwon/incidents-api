const { body } = require("express-validator");

module.exports = [
  body("email")
    .trim(" ")
    .toLowerCase()
    .notEmpty()
    .withMessage("please input your email")
    .isEmail()
    .withMessage("please input correct email address format")
    .normalizeEmail({ all_lowercase: true }),
  body("password")
    .trim(" ")
    .notEmpty()
    .withMessage("input a user password")
    .isLength({ min: 4 })
    .withMessage("password must be a minimum of 4 characters")
    .escape(),
  body("firstName")
    .trim(" ")
    .notEmpty()
    .withMessage("input a first name")
    .escape(),
  body("lastName")
    .trim(" ")
    .notEmpty()
    .withMessage("input a last name")
    .escape(),
];
