import "typings-global";

import {log} from "./beautylog.log.helpers";
export {log} from "./beautylog.log.helpers";

/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
export let info = (logText) => {
    return log(logText, 'info');
};

/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
export let ok = (logText) => {
    return log(logText, 'ok');
};

/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let success = (logText) => {
    return log(logText, 'success');
};

/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let warn = (logText) => {
    return log(logText, 'warn');
};

/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
export let error = (logText) => {
    return log(logText, 'error');
};

/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
export let dir = (logText) => {
    return log(logText, 'dir');
};

/**
 * creates a new empty line
 * @param linesArg
 * @returns void
 */
export let newLine = (linesArg:number = 1) => {
    for(let i = 0; i < linesArg;i++){
        console.log("\n");
    }
}

/**
 * logs a reduced log that only logs changes of consequential log messages
 */
export let logReduced = (logTextArg:string,repeatEveryTimesArg:number = 0) => {
    if(logTextArg == previousMessage && (repeatEveryTimesArg == 0 || sameMessageCounter != repeatEveryTimesArg)){
        sameMessageCounter++;
    } else {
        sameMessageCounter = 0;
        previousMessage = logTextArg;
        log(logTextArg);
    }
};
let previousMessage:string = "";
let sameMessageCounter:number = 0;