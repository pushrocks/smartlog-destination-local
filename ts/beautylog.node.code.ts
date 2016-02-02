/// <reference path="./index.ts" />
module BeautylogNodeCode {
    export var init = function() {


        var codeFunction = function(codeString,options?){
            var hlight = require("hlight");
            var codeSnippet = {
                source:codeString,
                highlighted:"default"
            };
            if (typeof codeString != "string"){
                console.log("beautylog.code() expects a string as first argument!");
                return;
            };
            if (typeof options != "undefined"){
                codeSnippet.highlighted = hlight(codeSnippet.source,options.language);
                //console.log(codeSnippet.highlighted)
            }
        };
        return codeFunction;
    }
}