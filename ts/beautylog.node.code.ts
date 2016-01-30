/// <reference path="./index.ts" />
module BeautylogNodeCode {
    export var init = function() {

        var consoleHighlight = function(code:string,language:string) {
            var fs = require('fs'),
                path = require('path'),
                htmlout = require('html2console'),
                hljs = require('highlight.js');

            var css = fs.readFileSync(path.join(__dirname, 'code.css'), 'utf8');

            var result;
            if (typeof language === "undefined"){
                result = hljs.highlight(language, code)
            } else {
                result = hljs.highlightAuto(code);
            };

            var html = result.value;
            var output = htmlout.withCSS(css);
            //console.log(html);
            return output('<pre class="hljs">' + html + '</pre>');
        };


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
                codeSnippet.highlighted = consoleHighlight(codeSnippet.source,options.language);
                console.log(codeSnippet.highlighted)
            }
        };
        return codeFunction;
    }
}