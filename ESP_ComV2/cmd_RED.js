let config = require('./config');
let commandPlayer = require('./commandPlayer');

let ip = process.argv.slice(2)[0]; // to get

(async ()=>{
    let isOk = await commandPlayer( ip, config.commands_to_player.color_red );
    console.log(isOk[1]); 
})()
