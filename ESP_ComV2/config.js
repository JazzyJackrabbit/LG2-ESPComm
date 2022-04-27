module.exports = {
    commands_to_player_key: "player",
    commands_to_player: {
        init: [" I", (c)=>c],
        start: [" S", (c)=>c],
        stop: [" E", (c)=>c],
        color_red: [" R", (c) => c],
        color_blue: [" B", (c) => c],
        color_green: [" G", (c) => c],
        color_none: [" N", (c)=>c],
        get_id_arduino: [" P", (c)=>c],
        buffer_esp_id: [" C", (c)=>c],
        set_id: [" D", 
            (c, id)=>{let txt = "" + c; if(id<10) txt += "0" + id; else txt += id; txt += "z"; return txt;},
        ],
        color: [" A", (c, data) =>
        {
            let txt = data;
            return txt;
        }
        ],
    },
    commands_get_player_key: "server",
    commands_by_player: {
        id_killer: ["K", 
            (m)=>m.substring(1, 3)],
        id_player: ["D",
            (m)=>m.substring(1, 3)],
    },
};
  