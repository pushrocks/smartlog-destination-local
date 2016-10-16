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
let xC = {
    black: 232,
    blue: 39,
    cyan: 87,
    green: 112,
    red: 196,
    white: 231,
};
let localBl = {
    dirPrefix: plugins.clc.bgXterm(xC.blue).xterm(xC.white).bold(' DIR ') + ' ',
    errorPrefix: plugins.clc.bgXterm(xC.red)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.red).bold(' Error: ') + ' ',
    infoPrefix: plugins.clc.bgXterm(198).xterm(231).bold(' INFO ') + ' ',
    logPrefix: plugins.clc.bgXterm(xC.cyan)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.cyan).bold(' Log: ') + ' ',
    okPrefix: plugins.clc.bgXterm(xC.green)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.green).bold(' OK! ') + ' ',
    successPrefix: plugins.clc.bgXterm(xC.green)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.green).bold(' Success: ') + ' ',
    warnPrefix: plugins.clc.bgYellow(' ') + plugins.clc.bgBlack.yellow.bold(' Warn: ') + ' '
};
exports.logNode = function (logType, logText) {
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + plugins.clc.xterm(xC.blue)(logText);
                break;
            case 'error':
                logText = localBl.errorPrefix + plugins.clc.xterm(xC.red).bold(logText);
                break;
            case 'info':
                logText = localBl.infoPrefix + plugins.clc.xterm(198)(logText);
                break;
            case 'normal':
                logText = localBl.logPrefix + plugins.clc.xterm(xC.cyan).bold(logText);
                break;
            case 'ok':
                logText = localBl.okPrefix + plugins.clc.bold(logText);
                break;
            case 'success':
                logText = localBl.successPrefix + plugins.clc.xterm(xC.green).bold(logText);
                break;
            case 'warn':
                logText = localBl.warnPrefix + plugins.clc.bold(logText);
                break;
            case 'log':
                logText = localBl.logPrefix + plugins.clc.blue.bold(logText);
                break;
            default:
                plugins.clc.blue.bold(logText);
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
            logText = localBl.dirPrefix + plugins.clc.xterm(26)(logText);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmxvZy5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBOEM7QUFDOUMsMkRBQW1EO0FBQ25ELHlEQUE4QztBQUU5Qzs7Ozs7R0FLRztBQUNRLFFBQUEsV0FBVyxHQUFHLFVBQVUsT0FBTyxHQUFXLFFBQVEsRUFBRSxPQUFPLEdBQVcsV0FBVztJQUN4RixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsS0FBSyxNQUFNO1lBQ1AsZUFBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUN6Qiw0QkFBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUMzQixLQUFLLENBQUE7UUFDVCxLQUFLLFNBQVM7WUFDVixVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQzVCLEtBQUssQ0FBQTtRQUNUO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFBO1lBQ3hGLEtBQUssQ0FBQTtJQUNiLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFRCxJQUFJLEVBQUUsR0FBRztJQUNMLEtBQUssRUFBRSxHQUFHO0lBQ1YsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxHQUFHO0lBQ1YsR0FBRyxFQUFFLEdBQUc7SUFDUixLQUFLLEVBQUUsR0FBRztDQUNiLENBQUE7QUFFRCxJQUFJLE9BQU8sR0FBRztJQUNWLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRztJQUMzRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHO0lBQ2xILFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUc7SUFDcEUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRztJQUNoSCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHO0lBQ2hILGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUc7SUFDMUgsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRztDQUMzRixDQUFBO0FBRVUsUUFBQSxPQUFPLEdBQUcsVUFBVSxPQUFlLEVBQUUsT0FBZTtJQUMzRCxJQUFJLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxLQUFLO2dCQUNOLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDakUsS0FBSyxDQUFBO1lBQ1QsS0FBSyxPQUFPO2dCQUNSLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZFLEtBQUssQ0FBQTtZQUNULEtBQUssTUFBTTtnQkFDUCxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDOUQsS0FBSyxDQUFBO1lBQ1QsS0FBSyxRQUFRO2dCQUNULE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3RFLEtBQUssQ0FBQTtZQUNULEtBQUssSUFBSTtnQkFDTCxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMs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