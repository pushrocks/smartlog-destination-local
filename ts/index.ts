/// <reference path="./typings/tsd.d.ts" />
var colors = require("colors");


var bl:any;
bl = {}

/**
 * object to append to all locally used params
 * @type {{}}
 */
var localBl:any;
localBl = {};
localBl.errorPrefix = ' Error: '.bgRed.white.bold  + ' ';
localBl.normalPrefix = ' Log: '.bgCyan.white.bold  + ' ';
localBl.okPrefix = ' '.bgGreen + ' OK! '.bgBlack.green.bold  + ' ';
localBl.successPrefix = ' Success: '.bgGreen.white.bold  + ' ';
localBl.warnPrefix = ' '.bgYellow + ' Warn: '.bgBlack.yellow.bold  + ' ';

/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
bl.log = (logText:string = 'empty log',logType:string = 'normal') => {
    try {
        switch (logType) {
            case 'error':
                logText = localBl.errorPrefix + logText.red.bold;
                break;
            case 'normal':
                logText = localBl.normalPrefix + logText.cyan.bold;
                break;
            case 'ok':
                logText = localBl.okPrefix + logText.italic;
                break;
            case 'success':
                logText = localBl.successPrefix + logText.green.bold;
                break;
            case 'warn':
                logText = localBl.warnPrefix + logText.italic;
                break;
            default:
                logText.blue.bold;
                console.log(('unknown logType for "' + logText + '"').red.bold);
        }
        console.log(logText);
        return true;
    }
    catch(error) {
        console.log(localBl.errorPrefix + 'You seem to have tried logging something strange'.red.bold + error);
        return false;
    }
};


/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
bl.error = function(logText) {
    return bl.log(logText, 'error');
};

/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
bl.ok = function(logText) {
    return bl.log(logText, 'ok');
};

/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
bl.success = function(logText) {
    return bl.log(logText, 'success');
}

/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
bl.warn = function(logText) {
    return bl.log(logText, 'warn');
}

module.exports = bl;
