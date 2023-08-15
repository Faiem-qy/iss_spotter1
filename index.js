const { fetchMyIP, fetchCoordsByIP } = require('./iss');

const ipAddress = '70.65.21.45';

const callback = function(error, data) {
  if (error) {
    console.error('Error', error);
  } else {
    console.log("Data", data);
  }
};


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});


fetchMyIP(callback);
fetchCoordsByIP(ipAddress, callback);