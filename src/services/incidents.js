const {
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("../db/queries");
const getWeatherReport = require("./getWeatherReport");
const { db } = require("../db");

module.exports = {
  /**
   * @description - This function creates an incident
   * @param {String} client_id - The client id of the incident
   * @param {String} title - The title of the incident
   * @param {String} incident_desc - The description of the incident
   * @param {String} city - The city of the incident
   * @param {String} country - The country of the incident
   * @returns {Object} - The created incident
   */
  createIncident: async (client_id, title, incident_desc, city, country) => {
    const weather_report = await getWeatherReport(city, country);
    return db.any(createIncident, [
      client_id,
      title,
      incident_desc,
      city,
      country,
      weather_report,
    ]);
  },
  /**
   * @description - This function gets all incidents
   * @returns {Object} - The list of all incident
   */
  getAllIncident: () => {
    return db.any(getAllIncidents);
  },

  /**
   * @description - This function gets all incidents by client id
   * @param {String} client_id - The id of the user creating the incident
   * @returns {Object} - The list of all incident matching the user id
   */
  getIncidentByClientId: (id) => {
    return db.any(getIncidentByClientId, [id]);
  },
};
