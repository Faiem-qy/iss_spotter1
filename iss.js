/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');


const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  const url = `https://api.ipify.org?format=jsonp&callback=getip`;


  request(url, (err, response, body) => {
    if (err) {
      callback(error, null);
      return;
    }

  
    if (response.statusCode !== 200) {
      const msg = `Status Code ${respose.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      // callback(`Request failed with status code ${response.statusCode}`, null);
      return;
    }
    try {
      const data = JSON.parse(body);
      const ip = data.ip;
      callback(null, ip);
    } catch (parseError) {
      callback(parseError, null);
    }

  });
};



const fetchCoordsByIP = function (str, cb){

} 

module.exports = { fetchMyIP, fetchCoordsByIP };