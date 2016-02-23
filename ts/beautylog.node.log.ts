/// <reference path="./typings/main.d.ts" />

import plugins = require("./beautylog.plugins");

var localBl = {
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
var logFunction = function(logText:string = 'empty log', logType:string = 'normal') {
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
            default:
                logText.blue.bold;
                console.log(('unknown logType for "' + logText + '"').red.bold);
                break;
        }
        console.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix + 'You seem to have tried logging something strange'.red.bold + error);
        return false;
    }
};
export = logFunction;