/// <reference path="./typings/main.d.ts" />
"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDOztBQUU1QyxzQ0FBa0IseUJBQXlCLENBQUMsQ0FBQTtBQUM1QyxzQ0FBa0IseUJBQXlCLENBQUM7QUFBcEMsMENBQW9DO0FBRTVDOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBVSxPQUFPO0lBQy9CLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsVUFBRSxHQUFHLFVBQVUsT0FBTztJQUM3QixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRyxVQUFVLE9BQU87SUFDbEMsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBVSxPQUFPO0lBQy9CLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsYUFBSyxHQUFHLFVBQVUsT0FBTztJQUNoQyxNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFdBQUcsR0FBRyxVQUFVLE9BQU87SUFDOUIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyIsImZpbGUiOiJiZWF1dHlsb2cubG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtsb2d9IGZyb20gXCIuL2JlYXV0eWxvZy5sb2cuaGVscGVyc1wiO1xyXG5leHBvcnQge2xvZ30gZnJvbSBcIi4vYmVhdXR5bG9nLmxvZy5oZWxwZXJzXCI7XHJcblxyXG4vKipcclxuICogbG9ncyBhbiBpbmZvIHRvIGNvbnNvbGVcclxuICogQHBhcmFtIGxvZ1RleHRcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgbGV0IGluZm8gPSBmdW5jdGlvbiAobG9nVGV4dCkge1xyXG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnaW5mbycpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGxvZ3MgYW4gJ09LIScgbWVzc2FnZSB0byBjb25zb2xlXHJcbiAqIEBwYXJhbSBsb2dUZXh0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGxldCBvayA9IGZ1bmN0aW9uIChsb2dUZXh0KSB7XHJcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICdvaycpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGxvZ3MgYSBzdWNjZXNzIHRvIGNvbnNvbGVcclxuICogQHBhcmFtIGxvZ1RleHQgc3RyaW5nIHRvIGxvZyBhcyBlcnJvclxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBsZXQgc3VjY2VzcyA9IGZ1bmN0aW9uIChsb2dUZXh0KSB7XHJcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICdzdWNjZXNzJyk7XHJcbn07XHJcblxyXG4vKipcclxuICogbG9ncyBhICd3YXJuOicgbWVzc2FnZSB0byBjb25zb2xlXHJcbiAqIEBwYXJhbSBsb2dUZXh0IHN0cmluZyB0byBsb2cgYXMgZXJyb3JcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgbGV0IHdhcm4gPSBmdW5jdGlvbiAobG9nVGV4dCkge1xyXG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnd2FybicpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGxvZ3MgYW4gZXJyb3IgdG8gY29uc29sZVxyXG4gKiBAcGFyYW0gbG9nVGV4dFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBsZXQgZXJyb3IgPSBmdW5jdGlvbiAobG9nVGV4dCkge1xyXG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnZXJyb3InKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBsb2dzIGFuIGRpcmVjdG9yeSB0byBjb25zb2xlXHJcbiAqIEBwYXJhbSBsb2dUZXh0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGxldCBkaXIgPSBmdW5jdGlvbiAobG9nVGV4dCkge1xyXG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnZGlyJyk7XHJcbn07Il19
