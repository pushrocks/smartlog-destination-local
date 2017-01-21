"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF1QjtBQUV2QixtRUFBbUQ7QUFFbkQ7Ozs7R0FJRztBQUVRLFFBQUEsR0FBRyxHQUFHLENBQUMsT0FBTztJQUNyQixNQUFNLENBQUMsbUNBQVcsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUcsQ0FBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQTtBQUN0QyxDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ1EsUUFBQSxFQUFFLEdBQUcsQ0FBQyxPQUFPO0lBQ3BCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ1EsUUFBQSxPQUFPLEdBQUcsQ0FBQyxPQUFPO0lBQ3pCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ1EsUUFBQSxJQUFJLEdBQUcsQ0FBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQTtBQUN0QyxDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ1EsUUFBQSxLQUFLLEdBQUcsQ0FBQyxPQUFPO0lBQ3ZCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ1EsUUFBQSxHQUFHLEdBQUcsQ0FBQyxPQUFPO0lBQ3JCLE1BQU0sQ0FBQyxtQ0FBVyxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsSUFBSSxHQUFHLENBQUMsT0FBTztJQUN0QixNQUFNLENBQUMsbUNBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDdkMsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsT0FBTyxHQUFHLENBQUMsV0FBbUIsQ0FBQztJQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxVQUFVLEdBQUcsQ0FBQyxVQUFrQixFQUFDLHNCQUE4QixDQUFDO0lBQ3ZFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxlQUFlLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxDQUFDLElBQUksa0JBQWtCLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUcsa0JBQWtCLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixrQkFBa0IsR0FBRyxDQUFDLENBQUE7UUFDdEIsZUFBZSxHQUFHLFVBQVUsQ0FBQTtRQUM1QixXQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDbkIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUNELElBQUksZUFBZSxHQUFXLEVBQUUsQ0FBQTtBQUNoQyxJQUFJLGtCQUFrQixHQUFXLENBQUMsQ0FBQSJ9