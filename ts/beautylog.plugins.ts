/// <reference path="./index.ts" />
module BeautylogPlugins {
    export var init = function(){
        var plugins:any = {
            smartenv: require("smartenv")
        };
        return plugins;
    };
}