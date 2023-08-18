const { nextISSTimesForMyLocation} = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {  //return the promise that is returned by the request
    printPassTimes(passTimes);  //the request, when called, returns a promise, and we want our function to return this same promise
  })
  .catch((error) => {
    console.log("It didn't work:", error.message);
  });

  // passtimes not defined error