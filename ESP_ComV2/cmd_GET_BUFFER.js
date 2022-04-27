let config = require('./config');
let commandPlayer = require('./commandPlayer');
let commandServer = require('./commandServer');

let ip = process.argv.slice(2)[0]; // to get

(async ()=>{
    let isOk = await commandServer( ip ); //"BUFFER ESP
    
    let buffer = isOk[1];
        
    console.log(buffer); 

})()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   