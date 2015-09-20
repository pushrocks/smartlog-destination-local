/// <reference path="typings/tsd.d.ts" />
var colors = require("colors");
var through = require("through2");

var bl:any = {}; //beautylog object
bl.errorPrefix = ' Error: '.bgRed.white.bold;
bl.successPrefix = ' Success: '.bgGreen.white.bold;


module.exports = (logText:string = 'empty log',logType = 'normal') => {
    switch(logType) {
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
