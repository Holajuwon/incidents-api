const {
  createUserTable,
  createUser,
  findUserByEmail,
  updatePassword,
} = require("./user");
const {
  createIncidentTable,
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("./incident");

module.exports = {
  createUserTable,
  createUser,
  updatePassword,
  findUserByEmail,
  createIncidentTable,
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
};
