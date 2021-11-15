const express = require("express");
const router = express.Router();
const {
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("../controllers");

router
  .get("/", getAllIncidents)
  .get("/:clientId", getIncidentByClientId)
  .post("/", createIncident);

module.exports = router;
