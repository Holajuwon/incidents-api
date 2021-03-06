const { getUserByEmail } = require("../services");
// const { checkErrors } = require("../utils/checkErrors");
const { errorResponse } = require("../utils/errorResponse");

module.exports = async (req, res, next) => {
  // let inputErrors = checkErrors(req, res);
  // if (inputErrors) return inputErrors;

  const { user } = req;
  if (user) {
    return errorResponse(req, res, 400, "You already have an account with us");
  }

  return next();
};
