const jwt = require("jsonwebtoken");


module.exports = (user_id, email) => {
  const payload = {
    id: user_id,
    email: email,
  };
  return jwt.sign(payload, process.env.SECRET_MESSAGE, {
    expiresIn: process.env.EXPIRY_TIME,
  });
};
