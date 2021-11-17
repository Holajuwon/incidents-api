const express = require("express");
const router = express.Router();
const {
  createIncident,
  getAllIncidents,
  getIncidentByClientId,
} = require("../controllers");
const { createIncidentSchema } = require("../db/schemas/incidents");
// const validateIncident = require("../middlewares/requestValidator/validateIncident");
const validateInput = require("../middlewares/requestValidator/validateInput");
const { verifyToken } = require("../middlewares/verifyToken");

router
  .get("/all", [verifyToken], getAllIncidents)
  .get("/", [verifyToken], getIncidentByClientId)
  .post(
    "/",
    [verifyToken, validateInput(createIncidentSchema, "body")],
    createIncident
  );

module.exports = router;
