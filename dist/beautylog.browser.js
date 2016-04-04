/// <reference path="./typings/main.d.ts" />
"use strict";
exports.log = function (message) {
    console.log('%c Log: %c ' + message, "background:#42A5F5;color:#ffffff", "color:#42A5F5;");
};
exports.info = function (message) {
    console.log('%c Info: %c ' + message, 'background:#EC407A;color:#ffffff;', 'color:#EC407A;');
};
exports.ok = function (message) {
    console.log('%c OK: %c ' + message, "background:#000000;color:#8BC34A;", "color:#000000;");
};
exports.success = function (message) {
    console.log('%c Success: %c ' + message, "background:#8BC34A;color:#ffffff;", "color:#8BC34A;");
};
exports.warn = function (message) {
    console.log('%c Warn: %c ' + message, "background:#000000;color:#FB8C00;", "color:#000000;");
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFakMsV0FBRyxHQUFHLFVBQVMsT0FBTztJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM3RixDQUFDLENBQUM7QUFDUyxZQUFJLEdBQUcsVUFBUyxPQUFPO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE9BQU8sRUFBQyxtQ0FBbUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQy9GLENBQUMsQ0FBQztBQUNTLFVBQUUsR0FBRyxVQUFTLE9BQU87SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDN0YsQ0FBQyxDQUFDO0FBQ1MsZUFBTyxHQUFHLFVBQVMsT0FBTztJQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sRUFBQyxtQ0FBbUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQztBQUNTLFlBQUksR0FBRyxVQUFTLE9BQU87SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDL0YsQ0FBQyxDQUFDIiwiZmlsZSI6ImJlYXV0eWxvZy5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5leHBvcnQgbGV0IGxvZyA9IGZ1bmN0aW9uKG1lc3NhZ2Upe1xuICAgIGNvbnNvbGUubG9nKCclYyBMb2c6ICVjICcgKyBtZXNzYWdlLFwiYmFja2dyb3VuZDojNDJBNUY1O2NvbG9yOiNmZmZmZmZcIixcImNvbG9yOiM0MkE1RjU7XCIpO1xufTtcbmV4cG9ydCBsZXQgaW5mbyA9IGZ1bmN0aW9uKG1lc3NhZ2Upe1xuICAgIGNvbnNvbGUubG9nKCclYyBJbmZvOiAlYyAnICsgbWVzc2FnZSwnYmFja2dyb3VuZDojRUM0MDdBO2NvbG9yOiNmZmZmZmY7JywnY29sb3I6I0VDNDA3QTsnKTtcbn07XG5leHBvcnQgbGV0IG9rID0gZnVuY3Rpb24obWVzc2FnZSl7XG4gICAgY29uc29sZS5sb2coJyVjIE9LOiAlYyAnICsgbWVzc2FnZSxcImJhY2tncm91bmQ6IzAwMDAwMDtjb2xvcjojOEJDMzRBO1wiLFwiY29sb3I6IzAwMDAwMDtcIik7XG59O1xuZXhwb3J0IGxldCBzdWNjZXNzID0gZnVuY3Rpb24obWVzc2FnZSl7XG4gICAgY29uc29sZS5sb2coJyVjIFN1Y2Nlc3M6ICVjICcgKyBtZXNzYWdlLFwiYmFja2dyb3VuZDojOEJDMzRBO2NvbG9yOiNmZmZmZmY7XCIsXCJjb2xvcjojOEJDMzRBO1wiKTtcbn07XG5leHBvcnQgbGV0IHdhcm4gPSBmdW5jdGlvbihtZXNzYWdlKXtcbiAgICBjb25zb2xlLmxvZygnJWMgV2FybjogJWMgJyArIG1lc3NhZ2UsXCJiYWNrZ3JvdW5kOiMwMDAwMDA7Y29sb3I6I0ZCOEMwMDtcIixcImNvbG9yOiMwMDAwMDA7XCIpO1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=