const { body } = require("express-validator");

module.exports = [
  body("clientId")
    .trim(" ")
    .toLowerCase()
    .notEmpty()
    .withMessage("please input your clientId"),
  body("title")
    .trim(" ")
    .toLowerCase()
    .notEmpty()
    .withMessage("please input your title"),
  body("description")
    .trim(" ")
    .toLowerCase()
    .notEmpty()
    .withMessage("please input your description"),
  body("city")
    .trim(" ")
    .toLowerCase()
    .notEmpty()
    .withMessage("please input your city"),
  body("country")
    .trim(" ")
    .toLowerCase()
    .notEmpty()
    .withMessage("please input your country"),
];
