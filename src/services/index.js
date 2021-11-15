const { createUser, getUserByEmail } = require("./user");
const {
  createIncident,
  getAllIncident,
  getIncidentByClientId,
} = require("./incidents");

module.exports = {
  createUser,
  getUserByEmail,
  createIncident,
  getAllIncident,
  getIncidentByClientId,
};
