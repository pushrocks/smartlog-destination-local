export import log = require("./beautylog.node.log");
export import table = require("./beautylog.node.table");
export declare let figlet: (textArg: string, optionsArg?: any) => any;
export declare let figletSync: (textArg: string, optionsArg?: any) => boolean;
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
export declare let dir: (logText: any) => boolean;
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
export declare let error: (logText: any) => boolean;
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
export declare let info: (logText: any) => boolean;
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
export declare let ok: (logText: any) => boolean;
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export declare let success: (logText: any) => boolean;
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export declare let warn: (logText: any) => boolean;
