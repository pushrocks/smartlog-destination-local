/// <reference path="typings/tsd.d.ts" />
var colors = require("colors");
var through = require("through2");
var bl = {}; //beautylog object
bl.errorPrefix = ' Error: '.bgRed.white.bold;
bl.successPrefix = ' Success: '.bgGreen.white.bold;
module.exports = function (logText, logType) {
    if (logText === void 0) { logText = 'empty log'; }
    if (logType === void 0) { logType = 'normal'; }
    switch (logType) {
        case 'normal':
            logText.cyan.bold;
        case 'error':
            logText = bl.errorPrefix + logText.red;
        case 'success':
            logText = bl.successPrefix + logText.cyan;
    }
    console.log(logText);
    return true;
};
