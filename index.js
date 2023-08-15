const { fetchMyIP, fetchCoordsByIP } = require('./iss');

const ipAddress = '39.19.211.75';

const callback = function(error, data) {
  if (error) {
    console.error('Error', error);
  } else {
    console.log("Data", data);
    return data;
  }
};


fetchMyIP(callback);
fetchCoordsByIP(ipAddress, callback);