const { getUserByEmail } = require("../services");
const { checkErrors } = require("../utils/checkErrors");
const { errorResponse } = require("../utils/errorResponse");
const { verifyHash } = require("../utils/hashHandler");

module.exports = async (req, res, next) => {
  let inputErrors = checkErrors(req, res);
  if (inputErrors) return inputErrors;

  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (user.length) {
    return errorResponse(req, res, 400, "You already have an account with us");
  }

  return next();
};
