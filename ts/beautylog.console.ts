import "typings-global";
import plugins = require("./beautylog.plugins");
import {activeOra,oraActive} from "./beautylog.classes.ora";
let nativeLog = console.log;

/**
 * routes the console to got through beautylog, so beautylog can take action before things are logged to console.
 */
let route = function(statusArg:boolean){
    if(statusArg == true){
        console.log = beautyConsole.log;
    } else {
        console.log = nativeLog;
    }
    
};

export let beautyConsole = {
    log2: nativeLog,
    log: function(logArg:any){
        if(oraActive){
            activeOra.pause();
            nativeLog.apply(nativeLog, arguments);
            activeOra.start();
        } else {
            nativeLog.apply(nativeLog, arguments);
        }
    }
}

route(true);