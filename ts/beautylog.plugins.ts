/// <reference path="./index.ts" />
module BeautylogPlugins {
    var plugins:any = {};
    export var init = function(){
        plugins = {
            lodash: require("lodash"),
            smartenv: require("smartenv"),
            q: require("q")
        };
        if (plugins.smartenv.getEnv().isNode){
            plugins = plugins.lodash.assign(plugins,{
                colors: require("colors"),
                clc: require("cli-color"),
                figlet: require("figlet")
            });
        }
        return plugins;
    };
}