import "typings-global";

import * as plugins from "./beautylog.plugins";
import * as BeautylogLog from "./beautylog.log";
import * as BeautylogFiglet from "./beautylog.figlet"
import * as BeautylogConsole from "./beautylog.console";

export {Table} from "./beautylog.classes.table";
export {Ora} from "./beautylog.classes.ora";

export let dir =  BeautylogLog.dir;
export let error =  BeautylogLog.error;
export let figlet =  BeautylogFiglet.figlet;
export let figletSync =  BeautylogFiglet.figletSync;
export let info =  BeautylogLog.info;
export let log =  BeautylogLog.log;
export let ok =  BeautylogLog.ok;
export let success =  BeautylogLog.success;
export let warn =  BeautylogLog.warn;