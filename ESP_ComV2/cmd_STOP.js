let config = require('./config');
let commandPlayer = require('./commandPlayer');

let ip = process.argv.slice(2)[0]; // to get


(async ()=>{

    let arrIpNums = ip.split('.');

    if(arrIpNums.length == 3 || arrIpNums[3] == "*"){
        // everyone
        for(let i = 2; i < 32; i++){
            
            (async ()=>{

                let ipFrm = ""
                ipFrm += arrIpNums[0] + ".";
                ipFrm += arrIpNums[1] + ".";
                ipFrm += arrIpNums[2] + ".";
                ipFrm += i;
    
                let isOk = await commandPlayer( ipFrm, config.commands_to_player.stop );
                console.log(isOk[1]);

            })();       
            
        }

    }else{

        let isOk = await commandPlayer( ip, config.commands_to_player.stop );
        console.log(isOk[1]);

    }

})()
