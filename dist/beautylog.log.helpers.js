"use strict";
const plugins = require("./beautylog.plugins");
const beautylog_console_1 = require("./beautylog.console");
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
    errorPrefix: coloredString(' ', 'red', 'red') + coloredString(' Error: ', 'red', 'black') + ' ',
    infoPrefix: coloredString(' ', 'pink', 'pink') + coloredString(' INFO ', 'pink', 'black') + ' ',
    logPrefix: coloredString(' ', 'white', 'cyan') + coloredString(' Log: ', 'cyan', 'black') + ' ',
    okPrefix: coloredString(' ', 'green', 'green') + coloredString(' OK! ', 'green', 'black') + ' ',
    successPrefix: coloredString(' ', 'green', 'green') + coloredString(' Success: ', 'green', 'black') + ' ',
    warnPrefix: coloredString(' ', 'orange', 'orange') + coloredString(' Warn: ', 'orange', 'black') + ' '
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
                logText = localBl.infoPrefix + coloredString(logText, 'pink');
                break;
            case 'normal':
                logText = localBl.logPrefix + coloredString(logText, 'cyan');
                break;
            case 'ok':
                logText = localBl.okPrefix + logText;
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
        beautylog_console_1.beautyConsole.log(logText);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmxvZy5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBOEM7QUFDOUMsMkRBQW1EO0FBQ25ELHlEQUE4QztBQUU5Qzs7Ozs7R0FLRztBQUNRLFFBQUEsV0FBVyxHQUFHLFVBQVUsVUFBa0IsUUFBUSxFQUFFLFVBQWtCLFdBQVc7SUFDeEYsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEtBQUssTUFBTTtZQUNQLGVBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDekIsNEJBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDM0IsS0FBSyxDQUFBO1FBQ1QsS0FBSyxTQUFTO1lBQ1YsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUM1QixLQUFLLENBQUE7UUFDVDtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkVBQTJFLENBQUMsQ0FBQTtZQUN4RixLQUFLLENBQUE7SUFDYixDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUE7QUFFckQsSUFBSSxPQUFPLEdBQUc7SUFDVixTQUFTLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRztJQUN4RCxXQUFXLEVBQUUsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRztJQUM5RixVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsYUFBYSxD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