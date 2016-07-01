import "typings-global";

import * as plugins from "./beautylog.plugins";
import * as BeautylogConsole from "./beautylog.console";

// export classes
export {Table} from "./beautylog.classes.table";
export {Ora} from "./beautylog.classes.ora";

// export methods
export {dir,error,info,log,logReduced,ok,success,warn,newLine} from "./beautylog.log";
export {figlet,figletSync} from "./beautylog.figlet";