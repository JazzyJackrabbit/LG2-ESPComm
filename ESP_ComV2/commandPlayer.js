// send command from config, 
// return[0] true if command is OK or false if the command is KO
// return[1] message 

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let config = require('./config');

module.exports = async (_ip, _command, _data)=>{
    try {

        commandChar = _command[0]; // char indice command
        commandFunc = _command[1]; // traitment

        commandRslt = commandFunc(commandChar, _data); // command to send

        let url = "http://" + _ip;

        url += "/?";
        url += config.commands_to_player_key;
        url += "=";
        url += commandRslt;

        let isOk = false;
        let respValue = "";
        let response = await new Promise(resolve => {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.timeout = 2000;
            xhr.onload = function(e) {
              resolve(xhr.response);
              respValue = xhr.responseText;
              isOk = true;
            };

            xhr.onerror = function () {
              resolve(undefined);
            };

            xhr.send();
        }) 

        if(isOk) return [true, "OK: \n " + respValue];
        return [false, "KO.."];  

    }catch (e) {
        return [false, "KO: "+ e];
    }
}
  