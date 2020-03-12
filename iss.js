const request = require('request');
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    
      
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);

   
  });
};

const fetchCoordsByIP = ((ip,callback)=>{
  request('https://ipvigilante.com/' + ip,(error,response,body)=>{

    if (error) {
      callback(error, null);
      return;
          
            
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, { latitude, longitude });
  });
});
 

const fetchISSFlyOverTimes = function(coords, callback) {
  request('http://api.open-notify.org/iss-pass.json?lat=' + coords.latitude + '&lon=' + coords.longitude,(error,response,body)=>{
    if (error) {
      callback(error);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    callback(JSON.parse(body).response);
  });
};






module.exports = { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes};