"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog_log_helpers_1 = require("./beautylog.log.helpers");
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.log = (logText) => {
    return beautylog_log_helpers_1.internalLog('log', logText);
};
exports.info = (logText) => {
    return beautylog_log_helpers_1.internalLog('info', logText);
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = (logText) => {
    return beautylog_log_helpers_1.internalLog('ok', logText);
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = (logText) => {
    return beautylog_log_helpers_1.internalLog('success', logText);
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = (logText) => {
    return beautylog_log_helpers_1.internalLog('warn', logText);
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = (logText) => {
    return beautylog_log_helpers_1.internalLog('error', logText);
};
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = (logText) => {
    return beautylog_log_helpers_1.internalLog('dir', logText);
};
/**
 * note
 */
exports.note = (logText) => {
    return beautylog_log_helpers_1.internalLog('note', logText);
};
/**
 * creates a new empty line
 * @param linesArg
 * @returns void
 */
exports.newLine = (linesArg = 1) => {
    for (let i = 0; i < linesArg; i++) {
        console.log('\n');
    }
};
/**
 * logs a reduced log that only logs changes of consequential log messages
 */
exports.logReduced = (logTextArg, repeatEveryTimesArg = 0) => {
    if (logTextArg === previousMessage && (repeatEveryTimesArg === 0 || sameMessageCounter !== repeatEveryTimesArg)) {
        sameMessageCounter++;
    }
    else {
        sameMessageCounter = 0;
        previousMessage = logTextArg;
        exports.log(logTextArg);
    }
};
let previousMessage = '';
let sameMessageCounter = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBdUI7QUFFdkIsbUVBQXFEO0FBRXJEOzs7O0dBSUc7QUFFUSxRQUFBLEdBQUcsR0FBRyxDQUFDLE9BQU87SUFDdkIsTUFBTSxDQUFDLG1DQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQUVVLFFBQUEsSUFBSSxHQUFHLENBQUMsT0FBTztJQUN4QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsRUFBRSxHQUFHLENBQUMsT0FBTztJQUN0QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDbkMsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsT0FBTyxHQUFHLENBQUMsT0FBTztJQUMzQixNQUFNLENBQUMsbUNBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDeEMsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsSUFBSSxHQUFHLENBQUMsT0FBTztJQUN4QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsS0FBSyxHQUFHLENBQUMsT0FBTztJQUN6QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDdEMsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsR0FBRyxHQUFHLENBQUMsT0FBTztJQUN2QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLElBQUksR0FBRyxDQUFDLE9BQU87SUFDeEIsTUFBTSxDQUFDLG1DQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDUSxRQUFBLE9BQU8sR0FBRyxDQUFDLFdBQW1CLENBQUM7SUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25CLENBQUM7QUFDSCxDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsVUFBVSxHQUFHLENBQUMsVUFBa0IsRUFBRSxzQkFBOEIsQ0FBQztJQUMxRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssZUFBZSxJQUFJLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxJQUFJLGtCQUFrQixLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hILGtCQUFrQixFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sa0JBQWtCLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLGVBQWUsR0FBRyxVQUFVLENBQUE7UUFDNUIsV0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUE7QUFDRCxJQUFJLGVBQWUsR0FBVyxFQUFFLENBQUE7QUFDaEMsSUFBSSxrQkFBa0IsR0FBVyxDQUFDLENBQUEifQ==