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

let coloredString = plugins.beautycolor.coloredString

let localBl = {
    dirPrefix: coloredString(' DIR ', 'white', 'blue') + ' ',
    errorPrefix: coloredString(' ', 'red','red') + coloredString(' Error: ', 'red', 'black') + ' ',
    infoPrefix: coloredString(' INFO ', 'white', 'pink') + ' ',
    logPrefix: coloredString(' ', 'white', 'cyan') + coloredString(' Log: ', 'cyan', 'black') + ' ',
    okPrefix: coloredString(' ', 'green', 'green') + coloredString(' OK! ', 'green', 'black') + ' ',
    successPrefix: coloredString(' ', 'green', 'green') + coloredString(' Success: ', 'green', 'black') + ' ',
    warnPrefix: coloredString(' ', 'orange', 'orange') + coloredString(' Warn: ', 'orange', 'black') + ' '
}

export let logNode = function (logType: string, logText: string) {
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + coloredString(logText, 'blue')
                break
            case 'error':
                logText = localBl.errorPrefix + coloredString(logText, 'red')
                break
            case 'info':
                logText = localBl.infoPrefix + coloredString(logText, 'pink')
                break
            case 'normal':
                logText = localBl.logPrefix + coloredString(logText, 'cyan')
                break
            case 'ok':
                logText = localBl.okPrefix + logText
                break
            case 'success':
                logText = localBl.successPrefix + coloredString(logText, 'green')
                break
            case 'warn':
                logText = localBl.warnPrefix + coloredString(logText, 'orange')
                break
            case 'log':
                logText = localBl.logPrefix + coloredString(logText, 'cyan')
                break
            default:
                coloredString(logText, 'blue')
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
            logText = localBl.dirPrefix + coloredString(logText, 'blue')
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
}
