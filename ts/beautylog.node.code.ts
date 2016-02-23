/// <reference path="./typings/main.d.ts" />

import plugins = require("./beautylog.plugins");
var codeFunction = function(codeString,options?){
    var codeSnippet = {
        source:codeString,
        highlighted:"default"
    };
    if (typeof codeString != "string"){
        console.log("beautylog.code() expects a string as first argument!");
        return;
    };
    if (typeof options != "undefined"){
        codeSnippet.highlighted = plugins.hlight(codeSnippet.source,options.language);
        //console.log(codeSnippet.highlighted)
    }
};
export = codeFunction;