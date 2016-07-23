"use strict";
require("typings-global");
const beautylog_log_helpers_1 = require("./beautylog.log.helpers");
var beautylog_log_helpers_2 = require("./beautylog.log.helpers");
exports.log = beautylog_log_helpers_2.log;
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.info = (logText) => {
    return beautylog_log_helpers_1.log(logText, 'info');
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = (logText) => {
    return beautylog_log_helpers_1.log(logText, 'ok');
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = (logText) => {
    return beautylog_log_helpers_1.log(logText, 'success');
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = (logText) => {
    return beautylog_log_helpers_1.log(logText, 'warn');
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = (logText) => {
    return beautylog_log_helpers_1.log(logText, 'error');
};
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = (logText) => {
    return beautylog_log_helpers_1.log(logText, 'dir');
};
/**
 * creates a new empty line
 * @param linesArg
 * @returns void
 */
exports.newLine = (linesArg = 1) => {
    for (let i = 0; i < linesArg; i++) {
        console.log("\n");
    }
};
/**
 * logs a reduced log that only logs changes of consequential log messages
 */
exports.logReduced = (logTextArg, repeatEveryTimesArg = 0) => {
    if (logTextArg == previousMessage && (repeatEveryTimesArg == 0 || sameMessageCounter != repeatEveryTimesArg)) {
        sameMessageCounter++;
    }
    else {
        sameMessageCounter = 0;
        previousMessage = logTextArg;
        beautylog_log_helpers_1.log(logTextArg);
    }
};
let previousMessage = "";
let sameMessageCounter = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUV4Qix3Q0FBa0IseUJBQXlCLENBQUMsQ0FBQTtBQUM1QyxzQ0FBa0IseUJBQXlCLENBQUM7QUFBcEMsMENBQW9DO0FBRTVDOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsQ0FBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsVUFBRSxHQUFHLENBQUMsT0FBTztJQUNwQixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRyxDQUFDLE9BQU87SUFDekIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsQ0FBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsYUFBSyxHQUFHLENBQUMsT0FBTztJQUN2QixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFdBQUcsR0FBRyxDQUFDLE9BQU87SUFDckIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxlQUFPLEdBQUcsQ0FBQyxRQUFRLEdBQVUsQ0FBQztJQUNyQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1Esa0JBQVUsR0FBRyxDQUFDLFVBQWlCLEVBQUMsbUJBQW1CLEdBQVUsQ0FBQztJQUNyRSxFQUFFLENBQUEsQ0FBQyxVQUFVLElBQUksZUFBZSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLGtCQUFrQixJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3pHLGtCQUFrQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDN0IsMkJBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxlQUFlLEdBQVUsRUFBRSxDQUFDO0FBQ2hDLElBQUksa0JBQWtCLEdBQVUsQ0FBQyxDQUFDIn0=