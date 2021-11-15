const {
  createIncident,
  getIncidentByClientId,
  getAllIncident,
} = require("../services");
const { checkErrors } = require("../utils/checkErrors");
const { errorResponse } = require("../utils/errorResponse");
const { successResponse } = require("../utils/successResponse");

module.exports = {
  /**
   * @desc create incident
   * @route POST /api/v1/incident
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {Response} a success response with created incident.
   */
  createIncident: async (req, res) => {
    try {
      let inputErrors = checkErrors(req, res);
      if (inputErrors) return inputErrors;

      const { clientId, title, description, city, country } = req.body;
      const incident = await createIncident(
        clientId,
        title,
        description,
        city,
        country
      );
      successResponse(res, 201, "Incident created successfully", incident);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },

  /**
   * @desc get incident by client id
   * @route GET /api/v1/incident/:client_id
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {Response} a success response with all incidents.
   */
  getIncidentByClientId: async (req, res) => {
    try {
      const { clientId } = req.params;
      const incident = await getIncidentByClientId(clientId);
      successResponse(res, 200, "Incident retrieved successfully", incident);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },

  /**
   * @desc get all incidents
   * @route GET /api/v1/incident
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {Response} a success response with all incidents.
   */
  getAllIncidents: async (req, res) => {
    try {
      const incidents = await getAllIncident();
      successResponse(res, 200, "Incidents retrieved successfully", incidents);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },
};
