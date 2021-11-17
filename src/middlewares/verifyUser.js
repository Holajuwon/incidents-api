const { getUserByEmail } = require("../services");
// const { checkErrors } = require("../utils/checkErrors");
const { errorResponse } = require("../utils/errorResponse");
const { verifyHash } = require("../utils/hashHandler");

module.exports = async (req, res, next) => {
  // let inputErrors = checkErrors(req, res);
  // if (inputErrors) return inputErrors;

  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  req.user = user[0];
  return next();
};
