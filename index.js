/// <reference path="typings/tsd.d.ts" />
var colors = require("colors");
var through = require("through2");
var bl;
bl = {};
/**
 * object to append to all locally used params
 * @type {{}}
 */
var localBl;
localBl = {};
localBl.errorPrefix = ' Error: '.bgRed.white.bold;
localBl.successPrefix = ' Success: '.bgGreen.white.bold;
/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
bl.log = function (logText, logType) {
    if (logText === void 0) { logText = 'empty log'; }
    if (logType === void 0) { logType = 'normal'; }
    try {
        switch (logType) {
            case 'normal':
                logText.cyan.bold;
            case 'error':
                logText = localBl.errorPrefix + logText.red.bold;
            case 'success':
                logText = localBl.successPrefix + logText.cyan.bold;
        }
        console.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix + 'You seem to have tried logging something strange'.red.bold + error);
        return false;
    }
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
bl.error = function (logText) {
    return bl.log(logText, 'error');
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
bl.success = function (logText) {
    return bl.log(logText, 'success');
};
module.exports = bl;
