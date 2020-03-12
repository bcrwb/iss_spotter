const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('66.207.199.230',(error,coordinates)=>{
//     if(error){
// console.log(error)
//     } else {
// console.log(coordinates)
//     }

//     fetchISSFlyOverTimes(coordinates,(error,data)=>{
//        if(error){
//            console.log(error)
//        } else {
//            console.log(data)
//        }
        
//     })
// })

