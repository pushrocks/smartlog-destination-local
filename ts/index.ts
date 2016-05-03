/// <reference path="./typings/main.d.ts" />

import * as plugins from "./beautylog.plugins";
import * as classes from "./beautylog.classes";
import * as BeautylogLog from "./beautylog.log";
import * as BeautylogFiglet from "./beautylog.figlet"
import * as BeautylogTable from "./beautylog.table";

export let log =  BeautylogLog.log;
export let info =  BeautylogLog.info;
export let ok =  BeautylogLog.ok;
export let success =  BeautylogLog.success;
export let warn =  BeautylogLog.warn;
export let error =  BeautylogLog.error;
export let dir =  BeautylogLog.dir;
export let figlet =  BeautylogFiglet.figlet;
export let figletSync =  BeautylogFiglet.figletSync;
export let table =  BeautylogTable.table
