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
  // const url = `https://api.ipify.org?format=jsonp&callback=getip`;
  const url = `https://api.ipify.org?format=json`;



  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }


    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
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



const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    } 

    const { latitude, longitude } = parsedBody;

    callback(null, {latitude, longitude});
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };