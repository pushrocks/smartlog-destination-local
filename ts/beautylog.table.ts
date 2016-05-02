/// <reference path="./typings/main.d.ts" />
import classes = require("./beautylog.classes");

export let table = {
    new: function(typeArg:string,tableHeadArrayArg?) {
        var newConsoleTable = new classes.ConsoleTable(typeArg,tableHeadArrayArg);
        return newConsoleTable;
    }
};