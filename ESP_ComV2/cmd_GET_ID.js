let config = require('./config');
let commandPlayer = require('./commandPlayer');
let commandServer = require('./commandServer');

let ip = process.argv.slice(2)[0]; // to get

(async ()=>{
    let isOk1 = await commandPlayer( ip, config.commands_to_player.get_id_arduino ); //"GET ID ARDUINO 
    await sleep(25);
    let isOk2 = await commandPlayer( ip, config.commands_to_player.buffer_esp_id ); //"GET ID FROM ARDUINO TO ESP
    await sleep(25);
    let isOk3 = await commandServer( ip ); //"BUFFER ESP
    
    if(isOk1[1] && isOk2[1]){ // convert buffer to last id
        let buffer = isOk3[1];

        let charIndiceId = config.commands_by_player.id_player[0];
        let lastIdBufferIndex = buffer.lastIndexOf(charIndiceId);

        if(lastIdBufferIndex >= 0){
            let lastIdBuffer = buffer.substring(lastIdBufferIndex+1, lastIdBufferIndex+3);
            console.log(lastIdBuffer); 
        }

    }

})()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   