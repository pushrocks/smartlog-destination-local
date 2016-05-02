/// <reference path="./typings/main.d.ts" />

import * as plugins from "./beautylog.plugins";
import * as classes from "./beautylog.classes";
import * as BeautylogLog from "./beautylog.log";
import * as BeautylogFiglet from "./beautylog.figlet"
import * as BeautylogTable from "./beautylog.table";

let beautylog = {
    log: BeautylogLog.log,
    info: BeautylogLog.info,
    ok: BeautylogLog.ok,
    success: BeautylogLog.success,
    warn: BeautylogLog.warn,
    error: BeautylogLog.error,
    dir: BeautylogLog.dir,
    figlet: BeautylogFiglet.figlet,
    figletSync: BeautylogFiglet.figletSync,
    table: BeautylogTable.table
};



/*switch(plugins.smartenv.getEnv().runtimeEnv) {
    case "node":
        beautylog = BeautylogNode;
        break;
    case "browser":
        beautylog = BeautylogBrowser;
        break;
    default:
        console.log("something is strange about the platform in which you try to use beautylog");
        break;
}*/

export = beautylog;
