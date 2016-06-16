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
exports.newLine = function (linesArg) {
    if (linesArg === void 0) { linesArg = 1; }
    for (var i = 0; i < linesArg; i++) {
        console.log("\n");
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QixzQ0FBa0IseUJBQXlCLENBQUMsQ0FBQTtBQUM1QyxzQ0FBa0IseUJBQXlCLENBQUM7QUFBcEMsMENBQW9DO0FBRTVDOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsVUFBRSxHQUFHLFVBQUMsT0FBTztJQUNwQixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRyxVQUFDLE9BQU87SUFDekIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsYUFBSyxHQUFHLFVBQUMsT0FBTztJQUN2QixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFdBQUcsR0FBRyxVQUFDLE9BQU87SUFDckIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVTLGVBQU8sR0FBRyxVQUFDLFFBQW1CO0lBQW5CLHdCQUFtQixHQUFuQixZQUFtQjtJQUNyQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztBQUNMLENBQUMsQ0FBQSIsImZpbGUiOiJiZWF1dHlsb2cubG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcblxuaW1wb3J0IHtsb2d9IGZyb20gXCIuL2JlYXV0eWxvZy5sb2cuaGVscGVyc1wiO1xuZXhwb3J0IHtsb2d9IGZyb20gXCIuL2JlYXV0eWxvZy5sb2cuaGVscGVyc1wiO1xuXG4vKipcbiAqIGxvZ3MgYW4gaW5mbyB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgaW5mbyA9IChsb2dUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnaW5mbycpO1xufTtcblxuLyoqXG4gKiBsb2dzIGFuICdPSyEnIG1lc3NhZ2UgdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgbGV0IG9rID0gKGxvZ1RleHQpID0+IHtcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICdvaycpO1xufTtcblxuLyoqXG4gKiBsb2dzIGEgc3VjY2VzcyB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dCBzdHJpbmcgdG8gbG9nIGFzIGVycm9yXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBzdWNjZXNzID0gKGxvZ1RleHQpID0+IHtcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICdzdWNjZXNzJyk7XG59O1xuXG4vKipcbiAqIGxvZ3MgYSAnd2FybjonIG1lc3NhZ2UgdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHQgc3RyaW5nIHRvIGxvZyBhcyBlcnJvclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgd2FybiA9IChsb2dUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnd2FybicpO1xufTtcblxuLyoqXG4gKiBsb2dzIGFuIGVycm9yIHRvIGNvbnNvbGVcbiAqIEBwYXJhbSBsb2dUZXh0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBlcnJvciA9IChsb2dUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnZXJyb3InKTtcbn07XG5cbi8qKlxuICogbG9ncyBhbiBkaXJlY3RvcnkgdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgbGV0IGRpciA9IChsb2dUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnZGlyJyk7XG59O1xuXG5leHBvcnQgbGV0IG5ld0xpbmUgPSAobGluZXNBcmc6bnVtYmVyID0gMSkgPT4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lc0FyZztpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTtcbiAgICB9XG59Il19
