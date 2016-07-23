"use strict";
const plugins = require("./beautylog.plugins");
const beautylog_console_1 = require("./beautylog.console");
let localBl = {
    dirPrefix: plugins.clc.bgXterm(39).xterm(231).bold(' DIR ') + ' ',
    errorPrefix: ' Error: '.bgRed.white.bold + ' ',
    infoPrefix: plugins.clc.bgXterm(198).xterm(231).bold(' INFO ') + ' ',
    normalPrefix: ' Log: '.bgCyan.white.bold + ' ',
    okPrefix: ' '.bgGreen + ' OK! '.bgBlack.green.bold + ' ',
    successPrefix: ' Success: '.bgGreen.white.bold + ' ',
    warnPrefix: ' '.bgYellow + ' Warn: '.bgBlack.yellow.bold + ' '
};
/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
exports.log = function (logText = 'empty log', logType = 'normal') {
    switch (plugins.smartenv.getEnv().runtimeEnv) {
        case "node":
            exports.logNode(logText, logType);
            break;
        case "browser":
            logBrowser(logText, logType);
            break;
        default:
            console.log("something is strange about the platform in which you try to use beautylog");
            break;
    }
};
exports.logNode = function (logText, logType) {
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + plugins.clc.xterm(26)(logText);
                break;
            case 'error':
                logText = localBl.errorPrefix + logText.red.bold;
                break;
            case 'info':
                logText = localBl.infoPrefix + plugins.clc.xterm(198)(logText);
                break;
            case 'normal':
                logText = localBl.normalPrefix + logText.cyan.bold;
                break;
            case 'ok':
                logText = localBl.okPrefix + logText.bold;
                break;
            case 'success':
                logText = localBl.successPrefix + logText.green.bold;
                break;
            case 'warn':
                logText = localBl.warnPrefix + logText.bold;
                break;
            case 'log':
                logText = localBl.normalPrefix + logText.blue.bold;
                break;
            default:
                logText.blue.bold;
                console.log(('unknown logType for "' + logText + '"').red.bold);
                break;
        }
        beautylog_console_1.beautyConsole.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix + 'You seem to have tried logging something strange'.red.bold + error);
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
            logText = localBl.normalPrefix + logText.cyan.bold;
            break;
        case 'ok':
            console.log('%c OK: %c ' + logText, "background:#000000;color:#8BC34A;", "color:#000000;");
            break;
        case 'success':
            console.log('%c Success: %c ' + logText, "background:#8BC34A;color:#ffffff;", "color:#8BC34A;");
            break;
        case 'warn':
            console.log('%c Warn: %c ' + logText, "background:#000000;color:#FB8C00;", "color:#000000;");
            break;
        case 'log':
            console.log('%c Log: %c ' + logText, "background:#42A5F5;color:#ffffff", "color:#42A5F5;");
            break;
        default:
            console.log('unknown logType for "' + logText + '"');
            break;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmxvZy5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxxQkFBcUIsQ0FBQyxDQUFBO0FBQy9DLG9DQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBRWxELElBQUksT0FBTyxHQUFHO0lBQ1YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRztJQUNqRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUc7SUFDOUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRztJQUNwRSxZQUFZLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUc7SUFDOUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUc7SUFDeEQsYUFBYSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHO0lBQ3BELFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHO0NBQ2pFLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNRLFdBQUcsR0FBRyxVQUFTLE9BQU8sR0FBVSxXQUFXLEVBQUUsT0FBTyxHQUFVLFFBQVE7SUFDN0UsTUFBTSxDQUFBLENBQUMsT0FB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