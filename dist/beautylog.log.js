"use strict";
require("typings-global");
var beautylog_log_helpers_1 = require("./beautylog.log.helpers");
var beautylog_log_helpers_2 = require("./beautylog.log.helpers");
exports.log = beautylog_log_helpers_2.log;
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.info = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'info');
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'ok');
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'success');
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'warn');
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'error');
};
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'dir');
};
/**
 * creates a new empty line
 * @param linesArg
 * @returns void
 */
exports.newLine = function (linesArg) {
    if (linesArg === void 0) { linesArg = 1; }
    for (var i = 0; i < linesArg; i++) {
        console.log("\n");
    }
};
/**
 * logs a reduced log that only logs changes of consequential log messages
 */
exports.logReduced = function (logTextArg, repeatEveryTimesArg) {
    if (repeatEveryTimesArg === void 0) { repeatEveryTimesArg = 0; }
    if (logTextArg == previousMessage && (repeatEveryTimesArg == 0 || sameMessageCounter != repeatEveryTimesArg)) {
        sameMessageCounter++;
    }
    else {
        sameMessageCounter = 0;
        previousMessage = logTextArg;
        beautylog_log_helpers_1.log(logTextArg);
    }
};
var previousMessage = "";
var sameMessageCounter = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QixzQ0FBa0IseUJBQXlCLENBQUMsQ0FBQTtBQUM1QyxzQ0FBa0IseUJBQXlCLENBQUM7QUFBcEMsMENBQW9DO0FBRTVDOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsVUFBRSxHQUFHLFVBQUMsT0FBTztJQUNwQixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRyxVQUFDLE9BQU87SUFDekIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsYUFBSyxHQUFHLFVBQUMsT0FBTztJQUN2QixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFdBQUcsR0FBRyxVQUFDLE9BQU87SUFDckIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxlQUFPLEdBQUcsVUFBQyxRQUFtQjtJQUFuQix3QkFBbUIsR0FBbkIsWUFBbUI7SUFDckMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLGtCQUFVLEdBQUcsVUFBQyxVQUFpQixFQUFDLG1CQUE4QjtJQUE5QixtQ0FBOEIsR0FBOUIsdUJBQThCO0lBQ3JFLEVBQUUsQ0FBQSxDQUFDLFVBQVUsSUFBSSxlQUFlLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksa0JBQWtCLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDekcsa0JBQWtCLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUM3QiwyQkFBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRixJQUFJLGVBQWUsR0FBVSxFQUFFLENBQUM7QUFDaEMsSUFBSSxrQkFBa0IsR0FBVSxDQUFDLENBQUMifQ==