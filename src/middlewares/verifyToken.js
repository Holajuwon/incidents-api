const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/errorResponse");
const { getUserByEmail } = require("../services");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return errorResponse(
        req,
        res,
        401,
        "authentication error. token required."
      );
    }

    const token = authHeader.split(" ")[1];

    const { email } = jwt.verify(token, process.env.SECRET_MESSAGE);

    const verifyUser = await getUserByEmail(email);

    if (!verifyUser.length) {
      return errorResponse(req, res, 404, "user not found");
    }

    req.user = verifyUser[0];

    next();
  } catch (error) {
    errorResponse(
      req,
      res,
      401,
      "Not authorized to access this route, token invalid or expired"
    );
  }
};
