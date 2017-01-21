import * as plugins from './beautylog.plugins'

export interface ILogMethod {
    (logType: string, logMessage: string): void
}

export interface IBeautyRemote {
    log: ILogMethod
}

export let remoteArray: IBeautyRemote[] = []

export let remoteLog = (logType: string, logMessage: string) => {
    for (let beautyremote of remoteArray) {
        beautyremote.log(logType, logMessage)
    }
}
