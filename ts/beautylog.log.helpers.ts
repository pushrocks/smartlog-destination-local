import * as plugins from './beautylog.plugins'
import { beautyConsole } from './beautylog.console'
import { remoteLog } from './beautylog.remote'

/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
export let internalLog = function (logType: string = 'normal', logText: string = 'empty log') {
    switch (plugins.smartenv.getEnv().runtimeEnv) {
        case 'node':
            logNode(logType, logText)
            remoteLog(logType, logText)
            break
        case 'browser':
            logBrowser(logText, logType)
            break
        default:
            console.log('something is strange about the platform in which you try to use beautylog')
            break
    }
}

let xC = {
    black: 232,
    blue: 39,
    cyan: 87,
    green: 112,
    red: 196,
    white: 231,
}

let localBl = {
    dirPrefix: plugins.clc.bgXterm(xC.blue).xterm(xC.white).bold(' DIR ') + ' ',
    errorPrefix: plugins.clc.bgXterm(xC.red)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.red).bold(' Error: ') + ' ',
    infoPrefix: plugins.clc.bgXterm(198).xterm(231).bold(' INFO ') + ' ',
    logPrefix: plugins.clc.bgXterm(xC.cyan)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.cyan).bold(' Log: ') + ' ',
    okPrefix: plugins.clc.bgXterm(xC.green)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.green).bold(' OK! ') + ' ',
    successPrefix: plugins.clc.bgXterm(xC.green)(' ') + plugins.clc.bgXterm(xC.black).xterm(xC.green).bold(' Success: ') + ' ',
    warnPrefix: plugins.clc.bgYellow(' ') + plugins.clc.bgBlack.yellow.bold(' Warn: ') + ' '
}

export let logNode = function (logType: string, logText: string) {
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + plugins.clc.xterm(xC.blue)(logText)
                break
            case 'error':
                logText = localBl.errorPrefix + plugins.clc.xterm(xC.red).bold(logText)
                break
            case 'info':
                logText = localBl.infoPrefix + plugins.clc.xterm(198)(logText)
                break
            case 'normal':
                logText = localBl.logPrefix + plugins.clc.xterm(xC.cyan).bold(logText)
                break
            case 'ok':
                logText = localBl.okPrefix + plugins.clc.bold(logText)
                break
            case 'success':
                logText = localBl.successPrefix + plugins.clc.xterm(xC.green).bold(logText)
                break
            case 'warn':
                logText = localBl.warnPrefix + plugins.clc.bold(logText)
                break
            case 'log':
                logText = localBl.logPrefix + plugins.clc.blue.bold(logText)
                break
            default:
                plugins.clc.blue.bold(logText)
                console.log(('unknown logType for "' + logText + '"'))
                break
        }
        beautyConsole.log(logText)
        return true
    } catch (error) {
        console.log(localBl.errorPrefix
            + 'You seem to have tried logging something strange' + error)
        return false
    }
}

let logBrowser = function (logText, logType) {
    switch (logType) {
        case 'dir':
            logText = localBl.dirPrefix + plugins.clc.xterm(26)(logText)
            break
        case 'error':
            logText = localBl.errorPrefix + logText.red.bold
            break
        case 'info':
            console.log('%c Info: %c ' + logText, 'background:#EC407A;color:#ffffff;', 'color:#EC407A;')
            break
        case 'normal':
            logText = localBl.logPrefix + logText.cyan.bold
            break
        case 'ok':
            console.log('%c OK: %c ' + logText, 'background:#000000;color:#8BC34A;', 'color:#000000;')
            break
        case 'success':
            console.log('%c Success: %c ' + logText, 'background:#8BC34A;color:#ffffff;', 'color:#8BC34A;')
            break
        case 'warn':
            console.log('%c Warn: %c ' + logText, 'background:#000000;color:#FB8C00;', 'color:#000000;')
            break
        case 'log':
            console.log('%c Log: %c ' + logText, 'background:#42A5F5;color:#ffffff', 'color:#42A5F5;')
            break
        default:
            console.log('unknown logType for "' + logText + '"')
            break
    }
};
