const { createUserTable, createUser, findUserByEmail } = require("./user");
const {
  createIncidentTable,
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("./incident");

module.exports = {
  createUserTable,
  createUser,
  findUserByEmail,
  createIncidentTable,
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
};
