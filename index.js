const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

const ipAddress = '76.69.21.44';

const callback = function(error, data) {
  if (error) {
    console.error('Error', error);
  } else {
    console.log("Data", data);
    return data;
  }
};


// fetchMyIP(callback);

// The code below is temporary and can be commented out.
// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP(ipAddress, (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// fetchCoordsByIP(ipAddress, callback);

// fetchISSFlyOverTimes({ latitude: 43.8561002, longitude: -79.3370188 }, callback)

nextISSTimesForMyLocation(callback)