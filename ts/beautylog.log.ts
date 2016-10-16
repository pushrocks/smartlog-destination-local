import 'typings-global'

import {internalLog} from './beautylog.log.helpers'

/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */

export let log = (logText) => {
    return internalLog('log',logText)
}

export let info = (logText) => {
    return internalLog('info',logText)
}

/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
export let ok = (logText) => {
    return internalLog('ok',logText)
}

/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let success = (logText) => {
    return internalLog('success',logText)
}

/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
export let warn = (logText) => {
    return internalLog('warn',logText)
}

/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
export let error = (logText) => {
    return internalLog('error',logText)
}

/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
export let dir = (logText) => {
    return internalLog('dir',logText)
}

/**
 * creates a new empty line
 * @param linesArg
 * @returns void
 */
export let newLine = (linesArg: number = 1) => {
    for (let i = 0; i < linesArg; i++) {
        console.log('\n')
    }
}

/**
 * logs a reduced log that only logs changes of consequential log messages
 */
export let logReduced = (logTextArg: string,repeatEveryTimesArg: number = 0) => {
    if (logTextArg === previousMessage && (repeatEveryTimesArg === 0 || sameMessageCounter != repeatEveryTimesArg)) {
        sameMessageCounter++
    } else {
        sameMessageCounter = 0
        previousMessage = logTextArg
        log(logTextArg)
    }
}
let previousMessage: string = ''
let sameMessageCounter: number = 0
