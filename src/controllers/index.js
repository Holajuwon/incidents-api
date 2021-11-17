const { createUser, login, forgotPassword, resetPassword } = require("./user");
const {
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("./incident");

module.exports = {
  createUser,
  login,
  forgotPassword,
  resetPassword,
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
};
