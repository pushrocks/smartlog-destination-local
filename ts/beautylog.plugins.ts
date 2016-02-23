/// <reference path="./typings/main.d.ts" />

var plugins:any = {
    lodash: require("lodash"),
    smartenv: require("smartenv"),
    q: require("q")
};
if (plugins.smartenv.getEnv().isNode){
    plugins = plugins.lodash.assign(plugins,{
        cliTable:  require("cli-table2"),
        colors: require("colors"),
        clc: require("cli-color"),
        figlet: require("figlet")
    });
}
export = plugins;