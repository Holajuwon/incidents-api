const { createUser, getUserByEmail, updatePassword } = require("./user");
const {
  createIncident,
  getAllIncident,
  getIncidentByClientId,
} = require("./incidents");

module.exports = {
  createUser,
  getUserByEmail,
  updatePassword,
  createIncident,
  getAllIncident,
  getIncidentByClientId,
};
