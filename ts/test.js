/// <reference path="./typings/tsd.d.ts" />
var beautyLog = require('./index.js');
console.log('*** start test ***');
console.log('');
console.log('declarative function calls:');
beautyLog.log('beautylog.log(), with normal logText, without logType');
beautyLog.dir('beautylog.dir(), with normal logText, without logType');
beautyLog.error('beautylog.error(), with normal logText, without logType');
beautyLog.info('beautylog.dir(), with normal logText, without logType');
beautyLog.ok('beautylog.ok(), with normal logText, without logType');
beautyLog.success('beautylog.success(), with normal logText, without logType');
beautyLog.warn('beautylog.warn(), with normal logText, without logType');
console.log('');
console.log('logType String:');
beautyLog.log('beautylog.log(), with normal logText, without logType');
beautyLog.log('beautylog.log(), with normal logText, with logType "dir"', 'dir');
beautyLog.log('beautylog.log(), with normal logText, with logType "error"', 'error');
beautyLog.log('beautylog.log(), with normal logText, with logType "info"', 'info');
beautyLog.log('beautylog.log(), with normal logText, with logType "ok"', 'ok');
beautyLog.log('beautylog.log(), with normal logText, with logType "success"', 'success');
beautyLog.log('beautylog.log(), with normal logText, with logType "warn"', 'warn');
console.log('');
console.log('*** end test ***');
//# sourceMappingURL=test.js.map