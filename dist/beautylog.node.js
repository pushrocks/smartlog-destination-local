/// <reference path="./typings/main.d.ts" />
exports.log = require("./beautylog.node.log");
exports.table = require("./beautylog.node.table");
//handle figlet
var figletModule = require("./beautylog.node.figlet");
exports.figlet = figletModule.figlet;
exports.figletSync = figletModule.figletSync;
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = function (logText) {
    return exports.log(logText, 'dir');
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = function (logText) {
    return exports.log(logText, 'error');
};
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.info = function (logText) {
    return exports.log(logText, 'info');
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = function (logText) {
    return exports.log(logText, 'ok');
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = function (logText) {
    return exports.log(logText, 'success');
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = function (logText) {
    return exports.log(logText, 'warn');
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUU5QixXQUFHLFdBQVcsc0JBQXNCLENBQUMsQ0FBQztBQUN0QyxhQUFLLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUV4RCxlQUFlO0FBQ2YsSUFBTyxZQUFZLFdBQVcseUJBQXlCLENBQUMsQ0FBQztBQUM5QyxjQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUM3QixrQkFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7QUFDaEQ7Ozs7R0FJRztBQUNRLFdBQUcsR0FBRyxVQUFTLE9BQU87SUFDN0IsTUFBTSxDQUFDLFdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBR0Y7Ozs7R0FJRztBQUNRLGFBQUssR0FBRyxVQUFTLE9BQU87SUFDL0IsTUFBTSxDQUFDLFdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFlBQUksR0FBRyxVQUFTLE9BQU87SUFDOUIsTUFBTSxDQUFDLFdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFVBQUUsR0FBRyxVQUFTLE9BQU87SUFDNUIsTUFBTSxDQUFDLFdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRyxVQUFTLE9BQU87SUFDakMsTUFBTSxDQUFDLFdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFlBQUksR0FBRyxVQUFTLE9BQU87SUFDOUIsTUFBTSxDQUFDLFdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJlYXV0eWxvZy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5leHBvcnQgaW1wb3J0IGxvZyA9IHJlcXVpcmUoXCIuL2JlYXV0eWxvZy5ub2RlLmxvZ1wiKTtcbmV4cG9ydCBpbXBvcnQgdGFibGUgPSByZXF1aXJlKFwiLi9iZWF1dHlsb2cubm9kZS50YWJsZVwiKTtcblxuLy9oYW5kbGUgZmlnbGV0XG5pbXBvcnQgZmlnbGV0TW9kdWxlID0gcmVxdWlyZShcIi4vYmVhdXR5bG9nLm5vZGUuZmlnbGV0XCIpO1xuZXhwb3J0IGxldCBmaWdsZXQgPSBmaWdsZXRNb2R1bGUuZmlnbGV0O1xuZXhwb3J0IGxldCBmaWdsZXRTeW5jID0gZmlnbGV0TW9kdWxlLmZpZ2xldFN5bmM7XG4vKipcbiAqIGxvZ3MgYW4gZGlyZWN0b3J5IHRvIGNvbnNvbGVcbiAqIEBwYXJhbSBsb2dUZXh0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBkaXIgPSBmdW5jdGlvbihsb2dUZXh0KSB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnZGlyJyk7XG59O1xuXG5cbi8qKlxuICogbG9ncyBhbiBlcnJvciB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgZXJyb3IgPSBmdW5jdGlvbihsb2dUZXh0KSB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnZXJyb3InKTtcbn07XG5cbi8qKlxuICogbG9ncyBhbiBpbmZvIHRvIGNvbnNvbGVcbiAqIEBwYXJhbSBsb2dUZXh0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBpbmZvID0gZnVuY3Rpb24obG9nVGV4dCkge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2luZm8nKTtcbn07XG5cbi8qKlxuICogbG9ncyBhbiAnT0shJyBtZXNzYWdlIHRvIGNvbnNvbGVcbiAqIEBwYXJhbSBsb2dUZXh0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBvayA9IGZ1bmN0aW9uKGxvZ1RleHQpIHtcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICdvaycpO1xufTtcblxuLyoqXG4gKiBsb2dzIGEgc3VjY2VzcyB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dCBzdHJpbmcgdG8gbG9nIGFzIGVycm9yXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBzdWNjZXNzID0gZnVuY3Rpb24obG9nVGV4dCkge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ3N1Y2Nlc3MnKTtcbn07XG5cbi8qKlxuICogbG9ncyBhICd3YXJuOicgbWVzc2FnZSB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dCBzdHJpbmcgdG8gbG9nIGFzIGVycm9yXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCB3YXJuID0gZnVuY3Rpb24obG9nVGV4dCkge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ3dhcm4nKTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
