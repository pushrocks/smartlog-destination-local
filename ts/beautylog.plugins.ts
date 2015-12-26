/// <reference path="./index.ts" />
module BeautylogPlugins {
    export var init = function(){
        var plugins = {
            smartenv: require("smartenv")
        };
        return plugins;
    };
}