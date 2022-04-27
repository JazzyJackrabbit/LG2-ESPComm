// send command in order to get esp buffer
// return[0] true if command is OK or false if the command is KO
// return[1] buffer value

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let config = require('./config');

module.exports = async (_ip)=>{
    try {
        
        let url = "http://" + _ip;
        
        url += "/?";
        url += config.commands_get_player_key;
        url += "=";
        url += "";

        let isOk = false;
        let bufferValue = "";
        let response = await new Promise(resolve => {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.timeout = 2000;
            xhr.onload = function(e) {
              resolve(xhr.response);
              bufferValue = xhr.responseText;
              isOk = true;
            };
            xhr.onerror = function () {
              resolve(undefined);
            };
            
            xhr.send();
        }) 

        if(isOk) return [true, bufferValue];
        return [false, "KO.."];  

    }catch (e) {
        return [false, "KO: "+ e];
    }
}
  