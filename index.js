const { fetchMyIP, fetchCoordsByIP } = require('./iss');

const ipAddress = '7.9.1.4';

const callback = function(error, data) {
  if (error) {
    console.error('Error', error);
  } else {
    console.log("Data", data);
  }
};


fetchMyIP(callback);
fetchCoordsByIP(ipAddress, callback);