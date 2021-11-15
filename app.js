const express = require("express");
const { db } = require("./src/db");
const { createIncidentTable, createUserTable } = require("./src/db/queries");
const port = process.env.PORT || 5000;
const userRouter = require("./src/routes/user");
const incidentRouter = require("./src/routes/incident");

const app = express();

app.use(express.json());

// routes/v1
app.use("/api/v1/user", userRouter);
app.use("/api/v1/incident", incidentRouter);

db.connect()
  .then((obj) => {
    console.log("Connected to database");
    app.listen(port, () => {
      db.any(createUserTable);
      db.any(createIncidentTable);
      obj.done();
      console.log(`Server running on port ${port} 🔥`);
    });
  })
  .catch((err) => {
    console.log("Could not connect to database", err);
    process.exit();
  });

module.exports = app;
