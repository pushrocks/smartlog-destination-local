/// <reference path="./typings/main.d.ts" />

import * as plugins from "./beautylog.plugins";
import * as classes from "./beautylog.classes";
import * as BeautylogLog from "./beautylog.log";
import * as BeautylogFiglet from "./beautylog.figlet"

import {Ora} from "./beautylog.classes.ora";
import {Table} from "./beautylog.classes.table";

export let dir =  BeautylogLog.dir;
export let error =  BeautylogLog.error;
export let figlet =  BeautylogFiglet.figlet;
export let figletSync =  BeautylogFiglet.figletSync;
export let info =  BeautylogLog.info;
export let log =  BeautylogLog.log;
export let ok =  BeautylogLog.ok;
export let ora = classes.ora;
export let success =  BeautylogLog.success;
export let table =  classes.table;
export let warn =  BeautylogLog.warn;
