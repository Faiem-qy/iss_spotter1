//Async code will not be returned immediately
//The asynchronous method returns a promise to supply the value at some point in the future.

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
//.then(handleFulfilledA, handleRejectedA)

//When either of these options occur(fullfilled or rejected)), the associated handlers queued up by a promise's then method are called
//The .then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object
//.then(handleFulfilledA, handleRejectedA)

const request = require("request-promise-native");  // when used this returns a promise?


const fetchMyIP = function() {
  return request(`https://api.ipify.org?format=json`);  //fetches our IP address from an API and returns the data as a promise
};


const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};


const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};


const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)  //gives the ip from fetchMyIp to this function
    .then(fetchISSFlyOverTimes)  //gives the coords from fetchCoords to this func
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };