import "typings-global";

import * as plugins from "./beautylog.plugins";

// export classes
export {Ora} from "./beautylog.classes.ora";

// export methods
export {dir,error,info,log,logReduced,ok,success,warn,newLine} from "./beautylog.log";
export {figlet,figletSync} from "./beautylog.figlet";
export {remote} from "./beautylog.remote";