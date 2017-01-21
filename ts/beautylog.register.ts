import {remoteArray} from './beautylog.remote'

/**
 * registers a remote
 */
export let registerRemote = (remoteArg: any) => {
    remoteArray.push(remoteArg)
}
