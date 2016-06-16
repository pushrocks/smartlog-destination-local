import "typings-global";

import * as plugins from "./beautylog.plugins";
import {beautyConsole} from "./beautylog.console";

let localBl = {
    dirPrefix: plugins.clc.bgXterm(39).xterm(231).bold(' DIR ') + ' ',
    errorPrefix: ' Error: '.bgRed.white.bold + ' ',
    infoPrefix: plugins.clc.bgXterm(198).xterm(231).bold(' INFO ') + ' ',
    normalPrefix: ' Log: '.bgCyan.white.bold + ' ',
    okPrefix: ' '.bgGreen + ' OK! '.bgBlack.green.bold + ' ',
    successPrefix: ' Success: '.bgGreen.white.bold + ' ',
    warnPrefix: ' '.bgYellow + ' Warn: '.bgBlack.yellow.bold + ' '
};

/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
export let log = function(logText:string = 'empty log', logType:string = 'normal') {
    switch(plugins.smartenv.getEnv().runtimeEnv) {
    case "node":
        logNode(logText,logType);
        break;
    case "browser":
        logBrowser(logText,logType);
        break;
    default:
        console.log("something is strange about the platform in which you try to use beautylog");
        break;
}
};

export let logNode = function(logText:string,logType:string){
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + plugins.clc.xterm(26)(logText);
                break;
            case 'error':
                logText = localBl.errorPrefix + logText.red.bold;
                break;
            case 'info':
                logText = localBl.infoPrefix + plugins.clc.xterm(198)(logText);
                break;
            case 'normal':
                logText = localBl.normalPrefix + logText.cyan.bold;
                break;
            case 'ok':
                logText = localBl.okPrefix + logText.bold;
                break;
            case 'success':
                logText = localBl.successPrefix + logText.green.bold;
                break;
            case 'warn':
                logText = localBl.warnPrefix + logText.bold;
                break;
            case 'log':
                logText = localBl.normalPrefix + logText.blue.bold;
                break;
            default:
                logText.blue.bold;
                console.log(('unknown logType for "' + logText + '"').red.bold);
                break;
        }
        beautyConsole.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix + 'You seem to have tried logging something strange'.red.bold + error);
        return false;
    }
}

let logBrowser = function(logText,logType){
    switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + plugins.clc.xterm(26)(logText);
                break;
            case 'error':
                logText = localBl.errorPrefix + logText.red.bold;
                break;
            case 'info':
                console.log('%c Info: %c ' + logText,'background:#EC407A;color:#ffffff;','color:#EC407A;');
                break;
            case 'normal':
                logText = localBl.normalPrefix + logText.cyan.bold;
                break;
            case 'ok':
                console.log('%c OK: %c ' + logText,"background:#000000;color:#8BC34A;","color:#000000;");
                break;
            case 'success':
                console.log('%c Success: %c ' + logText,"background:#8BC34A;color:#ffffff;","color:#8BC34A;");
                break;
            case 'warn':
                console.log('%c Warn: %c ' + logText,"background:#000000;color:#FB8C00;","color:#000000;");
                break;
            case 'log':
                console.log('%c Log: %c ' + logText,"background:#42A5F5;color:#ffffff","color:#42A5F5;");
                break;
            default:
                console.log('unknown logType for "' + logText + '"');
                break;
        }
};