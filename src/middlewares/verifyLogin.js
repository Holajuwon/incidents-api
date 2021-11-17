const { getUserByEmail } = require("../services");
// const { checkErrors } = require("../utils/checkErrors");
const { errorResponse } = require("../utils/errorResponse");
const { verifyHash } = require("../utils/hashHandler");

module.exports = async (req, res, next) => {
  // let inputErrors = checkErrors(req, res);
  // if (inputErrors) return inputErrors;

  const { password } = req.body;
  const { user } = req;
  if (!user) {
    return errorResponse(req, res, 404, "You do not have an account with us");
  }

  if (!verifyHash(password, user.password)) {
    return errorResponse(req, res, 401, "Invalid email or password");
  }
  req.user = user;
  return next();
};
