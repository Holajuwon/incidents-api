const { createUser, getUserByEmail } = require("../services");
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
      const { email, password, firstName, lastName } = req.body;
      const user = await createUser(email, firstName, lastName, password);
      successResponse(res, 201, "User created successfully", user);
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
      let { user } = req;
      successResponse(res, 200, "User logged in successfully", user);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },
};
