module.exports = {
  /**
   * @description Creates the incident table
   */
  createIncidentTable: `
    CREATE TABLE IF NOT EXISTS incidents(
      id SERIAL PRIMARY KEY,
      client_id INTEGER NOT NULL REFERENCES users(id),
      title TEXT,
      incident_desc TEXT,
      city TEXT,
      country TEXT,
      weather_report JSON,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `,
  /**
   * @description Creates the incidents table
   * @param {number} client_id the id of the user
   * @param {string} title title of the incident
   * @param {string} incident_desc description of the incident
   * @param {string} city city of the incident
   * @param {string} country country of the incident
   * @param {object} weather_report weather report of the incident
   * @returns {Promise<object>}  returns the created incident
   */
  createIncident: `
    INSERT INTO incidents(client_id, title, incident_desc, city, country, weather_report)
    VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
  /**
   * @description Gets all incidents
   * @returns {Promise<object>}  returns all incidents
   */
  getAllIncidents: `
    SELECT * FROM incidents;
  `,
  /**
   * @description Gets all incidents by incident id
   * @param {number} id the id of the incident
   * @returns {Promise<object>}  returns all incidents matching the id
   */
  getIncidentById: `
    SELECT * FROM incidents WHERE id = $1;
  `,
  /**
   * @description Gets all incidents by client id
   * @param {number} client_id the id of the user
   * @returns {Promise<object>}  returns all incidents matching the client id
   */
  getIncidentByClientId: `
    SELECT * FROM incidents WHERE client_id = $1;
  `,
  updateIncident: `
    UPDATE incidents SET title = $2, incident_desc = $3, city = $4, country = $5, weather_report = $6, updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,
  deleteIncident: `
    DELETE FROM incidents WHERE id = $1;
  `,
};
