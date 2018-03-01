"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog_log_helpers_1 = require("./beautylog.log.helpers");
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.log = logText => {
    return beautylog_log_helpers_1.internalLog('log', logText);
};
exports.info = logText => {
    return beautylog_log_helpers_1.internalLog('info', logText);
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = logText => {
    return beautylog_log_helpers_1.internalLog('ok', logText);
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = logText => {
    return beautylog_log_helpers_1.internalLog('success', logText);
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = logText => {
    return beautylog_log_helpers_1.internalLog('warn', logText);
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = logText => {
    return beautylog_log_helpers_1.internalLog('error', logText);
};
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = logText => {
    return beautylog_log_helpers_1.internalLog('dir', logText);
};
/**
 * note
 */
exports.note = logText => {
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
    if (logTextArg === previousMessage &&
        (repeatEveryTimesArg === 0 || sameMessageCounter !== repeatEveryTimesArg)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBd0I7QUFFeEIsbUVBQXNEO0FBRXREOzs7O0dBSUc7QUFFUSxRQUFBLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRTtJQUN6QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRVMsUUFBQSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUU7SUFDMUIsTUFBTSxDQUFDLG1DQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxRQUFBLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRTtJQUN4QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFFBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFO0lBQzdCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsUUFBQSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUU7SUFDMUIsTUFBTSxDQUFDLG1DQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxRQUFBLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRTtJQUMzQixNQUFNLENBQUMsbUNBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFFBQUEsR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFO0lBQ3pCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNRLFFBQUEsSUFBSSxHQUFHLE9BQU8sQ0FBQyxFQUFFO0lBQzFCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsUUFBQSxPQUFPLEdBQUcsQ0FBQyxXQUFtQixDQUFDLEVBQUUsRUFBRTtJQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGOztHQUVHO0FBQ1EsUUFBQSxVQUFVLEdBQUcsQ0FBQyxVQUFrQixFQUFFLHNCQUE4QixDQUFDLEVBQUUsRUFBRTtJQUM5RSxFQUFFLENBQUMsQ0FDRCxVQUFVLEtBQUssZUFBZTtRQUM5QixDQUFDLG1CQUFtQixLQUFLLENBQUMsSUFBSSxrQkFBa0IsS0FBSyxtQkFBbUIsQ0FDMUUsQ0FBQyxDQUFDLENBQUM7UUFDRCxrQkFBa0IsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQzdCLFdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxlQUFlLEdBQVcsRUFBRSxDQUFDO0FBQ2pDLElBQUksa0JBQWtCLEdBQVcsQ0FBQyxDQUFDIn0=