/// <reference path="./typings/index.d.ts" />

import {log} from "./beautylog.log.helpers";
export {log} from "./beautylog.log.helpers";

/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
export let info = function (logText) {
    return log(logText, 'info');
};

/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
export let ok = function (logText) {
    return log(logText, 'ok');
};

/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let success = function (logText) {
    return log(logText, 'success');
};

/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let warn = function (logText) {
    return log(logText, 'warn');
};

/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
export let error = function (logText) {
    return log(logText, 'error');
};

/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
export let dir = function (logText) {
    return log(logText, 'dir');
};