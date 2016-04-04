/// <reference path="./typings/main.d.ts" />

export import log = require("./beautylog.node.log");
export import table = require("./beautylog.node.table");

//handle figlet
import figletModule = require("./beautylog.node.figlet");
export let figlet = figletModule.figlet;
export let figletSync = figletModule.figletSync;
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
export let dir = function(logText) {
    return log(logText, 'dir');
};


/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
export let error = function(logText) {
    return log(logText, 'error');
};

/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
export let info = function(logText) {
    return log(logText, 'info');
};

/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
export let ok = function(logText) {
    return log(logText, 'ok');
};

/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let success = function(logText) {
    return log(logText, 'success');
};

/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let warn = function(logText) {
    return log(logText, 'warn');
};