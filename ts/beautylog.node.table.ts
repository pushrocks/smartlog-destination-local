/// <reference path="./typings/main.d.ts" />
import classes = require("./beautylog.classes");

var beautylogOsTable:any = {};

beautylogOsTable.new = function(typeArg:string,tableHeadArrayArg?) {
    var newConsoleTable = new classes.ConsoleTable(typeArg,tableHeadArrayArg);
    return newConsoleTable;
};
export = beautylogOsTable;