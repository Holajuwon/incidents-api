const { getUserByEmail } = require("../services");
// const { checkErrors } = require("../utils/checkErrors");
const { errorResponse } = require("../utils/errorResponse");
const { verifyHash } = require("../utils/hashHandler");

module.exports = async (req, res, next) => {
  // let inputErrors = checkErrors(req, res);
  // if (inputErrors) return inputErrors;

  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user.length) {
    return errorResponse(req, res, 404, "You do not have an account with us");
  }
  if (!verifyHash(password, user[0].password)) {
    return errorResponse(req, res, 401, "Invalid email or password");
  }
  req.user = user[0];
  return next();
};
