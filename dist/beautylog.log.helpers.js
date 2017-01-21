"use strict";
const plugins = require("./beautylog.plugins");
const beautylog_remote_1 = require("./beautylog.remote");
/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
exports.internalLog = function (logType = 'normal', logText = 'empty log') {
    switch (plugins.smartenv.getEnv().runtimeEnv) {
        case 'node':
            exports.logNode(logType, logText);
            beautylog_remote_1.remoteLog(logType, logText);
            break;
        case 'browser':
            logBrowser(logText, logType);
            break;
        default:
            console.log('something is strange about the platform in which you try to use beautylog');
            break;
    }
};
let coloredString = plugins.beautycolor.coloredString;
let localBl = {
    dirPrefix: coloredString(' DIR ', 'white', 'blue') + ' ',
    errorPrefix: coloredString(' ', 'red', 'red') + coloredString(' ERROR!  ', 'red', 'black') + ' ',
    infoPrefix: coloredString(' ', 'blue', 'blue') + coloredString(' INFO: ', 'blue', 'black') + ' ',
    logPrefix: coloredString(' ', 'white', 'cyan') + coloredString(' LOG: ', 'cyan', 'black') + ' ',
    notePrefix: coloredString(' ', 'pink', 'pink') + coloredString(' NOTE -> ', 'pink', 'black') + ' ',
    okPrefix: coloredString(' ', 'green', 'green') + coloredString(' OK! ', 'green', 'black') + ' ',
    successPrefix: coloredString(' ', 'green', 'green') + coloredString(' SUCCESS! ', 'green', 'black') + ' ',
    warnPrefix: coloredString(' ', 'orange', 'orange') + coloredString(' WARN: -> ', 'orange', 'black') + ' '
};
exports.logNode = function (logType, logText) {
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + coloredString(logText, 'blue');
                break;
            case 'error':
                logText = localBl.errorPrefix + coloredString(logText, 'red');
                break;
            case 'info':
                logText = localBl.infoPrefix + coloredString(logText, 'blue');
                break;
            case 'normal':
                logText = localBl.logPrefix + coloredString(logText, 'cyan');
                break;
            case 'note':
                logText = localBl.notePrefix + coloredString(logText, 'pink');
                break;
            case 'ok':
                logText = localBl.okPrefix + coloredString(logText, 'green');
                break;
            case 'success':
                logText = localBl.successPrefix + coloredString(logText, 'green');
                break;
            case 'warn':
                logText = localBl.warnPrefix + coloredString(logText, 'orange');
                break;
            case 'log':
                logText = localBl.logPrefix + coloredString(logText, 'cyan');
                break;
            default:
                coloredString(logText, 'blue');
                console.log(('unknown logType for "' + logText + '"'));
                break;
        }
        console.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix
            + 'You seem to have tried logging something strange' + error);
        return false;
    }
};
let logBrowser = function (logText, logType) {
    switch (logType) {
        case 'dir':
            logText = localBl.dirPrefix + coloredString(logText, 'blue');
            break;
        case 'error':
            logText = localBl.errorPrefix + logText.red.bold;
            break;
        case 'info':
            console.log('%c Info: %c ' + logText, 'background:#EC407A;color:#ffffff;', 'color:#EC407A;');
            break;
        case 'normal':
            logText = localBl.logPrefix + logText.cyan.bold;
            break;
        case 'ok':
            console.log('%c OK: %c ' + logText, 'background:#000000;color:#8BC34A;', 'color:#000000;');
            break;
        case 'success':
            console.log('%c Success: %c ' + logText, 'background:#8BC34A;color:#ffffff;', 'color:#8BC34A;');
            break;
        case 'warn':
            console.log('%c Warn: %c ' + logText, 'background:#000000;color:#FB8C00;', 'color:#000000;');
            break;
        case 'log':
            console.log('%c Log: %c ' + logText, 'background:#42A5F5;color:#ffffff', 'color:#42A5F5;');
            break;
        default:
            console.log('unknown logType for "' + logText + '"');
            break;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmxvZy5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBOEM7QUFDOUMseURBQThDO0FBRTlDOzs7OztHQUtHO0FBQ1EsUUFBQSxXQUFXLEdBQUcsVUFBVSxVQUFrQixRQUFRLEVBQUUsVUFBa0IsV0FBVztJQUN4RixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsS0FBSyxNQUFNO1lBQ1AsZUFBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUN6Qiw0QkFBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUMzQixLQUFLLENBQUE7UUFDVCxLQUFLLFNBQVM7WUFDVixVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQzVCLEtBQUssQ0FBQTtRQUNUO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFBO1lBQ3hGLEtBQUssQ0FBQTtJQUNiLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQTtBQUVyRCxJQUFJLE9BQU8sR0FBRztJQUNWLFNBQVMsRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQ3hELFdBQVcsRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHO0lBQy9GLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFF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