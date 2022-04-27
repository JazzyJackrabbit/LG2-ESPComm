let config = require('./config');
let commandPlayer = require('./commandPlayer');

let color = process.argv.slice(2)[0]; // to get
let ip = process.argv.slice(2)[1]; // to get

(async ()=>{
    let isOk = await commandPlayer(ip, config.commands_to_player.color, color);
    console.log(isOk[1]); 
})()
