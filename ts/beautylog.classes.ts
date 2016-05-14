/// <reference path="./typings/main.d.ts" />

import {Table} from "./beautylog.classes.table";
import {Ora} from "./beautylog.classes.ora";

export let table = function(tableTypeArg:string,tableHeadArrayArg?:string[]){
    return new Table(tableTypeArg,tableHeadArrayArg);
}

export let ora = function(textArg:string,colorArg:string,startArg?:boolean){
    return new Ora(textArg,colorArg,startArg);
}