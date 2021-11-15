const express = require("express");
const router = express.Router();
const {
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("../controllers");
const validateIncident = require("../middlewares/requestValidator/validateIncident");
const verifyToken = require("../middlewares/verifyToken");

router
  .get("/all", [verifyToken], getAllIncidents)
  .get("/", [verifyToken], getIncidentByClientId)
  .post("/", [verifyToken, validateIncident], createIncident);

module.exports = router;
