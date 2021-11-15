const { createUser, getUserByEmail } = require("../services");
const generateToken = require("../utils/generateToken");
const { successResponse } = require("../utils/successResponse");

module.exports = {
  /**
   * @desc create user
   * @route POST /api/v1/user
   * @access public
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {object} a success response containing user object
   */
  createUser: async (req, res) => {
    try {
      const { body } = req;
      const user = await createUser(body);
      let { id, first_name, last_name, email } = user[0];
      const token = generateToken(id, email);
      let result = {
        id,
        first_name,
        last_name,
        email,
        token,
      };
      successResponse(res, 201, "User created successfully", result);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },

  /**
   * @desc login user
   * @route POST /api/v1/user/login
   * @access public
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {object} a success response containing user object
   */
  login: async (req, res) => {
    try {
      let { id, first_name, last_name, email } = req.user;
      let token = generateToken(id, email);
      const result = {
        id,
        first_name,
        last_name,
        email,
        token,
      };
      successResponse(res, 200, "User logged in successfully", result);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },
};
