const { createUser, login } = require("./user");
const {
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("./incident");

module.exports = {
  createUser,
  login,
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
};
