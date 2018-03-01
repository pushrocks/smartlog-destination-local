"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./beautylog.plugins");
/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
exports.internalLog = function (logType = 'normal', logText = 'empty log') {
    switch ((new plugins.smartenv.Smartenv()).runtimeEnv) {
        case 'node':
            exports.logNode(logType, logText);
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
                console.log('unknown logType for "' + logText + '"');
                break;
        }
        console.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix + 'You seem to have tried logging something strange' + error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmxvZy5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQStDO0FBRS9DOzs7OztHQUtHO0FBQ1EsUUFBQSxXQUFXLEdBQUcsVUFBUyxVQUFrQixRQUFRLEVBQUUsVUFBa0IsV0FBVztJQUN6RixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckQsS0FBSyxNQUFNO1lBQ1QsZUFBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUM7UUFDUixLQUFLLFNBQVM7WUFDWixVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQztRQUNSO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO1lBQ3pGLEtBQUssQ0FBQztJQUNWLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUV0RCxJQUFJLE9BQU8sR0FBRztJQUNaLFNBQVMsRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQ3hELFdBQVcsRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHO0lBQ2hHLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHO0lBQ2hHLFNB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