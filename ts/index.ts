import 'typings-global'
import './beautylog.console'

import * as plugins from './beautylog.plugins'
// export classes
export { ora } from './beautylog.classes.ora'

// export methods
export { dir, error, info, log, logReduced, note, ok, success, warn, newLine } from './beautylog.log'
export { figlet, figletSync } from './beautylog.figlet'
export { registerRemote } from './beautylog.register'
