const API_KEY = process.env.OWM_API_KEY;
const axios = require("axios");

/**
 * @description - Get weather report from openweathermap.org
 * @param {string} city city of incident
 * @param {String} country country of incident
 * @returns {Promise<object>} returns the weather report
 */
module.exports = async (city, country) => {
  try {
    let data = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    );
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};
