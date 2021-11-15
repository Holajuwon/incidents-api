const express = require("express");
const router = express.Router();
const {
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("../controllers");
const validateIncident = require("../middlewares/requestValidator/validateIncident");

router
  .get("/", getAllIncidents)
  .get("/:clientId", getIncidentByClientId)
  .post("/", [validateIncident], createIncident);

module.exports = router;
