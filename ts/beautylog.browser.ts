/// <reference path="./typings/main.d.ts" />

export let log = function(message){
    console.log('%c Log: %c ' + message,"background:#42A5F5;color:#ffffff","color:#42A5F5;");
};
export let info = function(message){
    console.log('%c Info: %c ' + message,'background:#EC407A;color:#ffffff;','color:#EC407A;');
};
export let ok = function(message){
    console.log('%c OK: %c ' + message,"background:#000000;color:#8BC34A;","color:#000000;");
};
export let success = function(message){
    console.log('%c Success: %c ' + message,"background:#8BC34A;color:#ffffff;","color:#8BC34A;");
};
export let warn = function(message){
    console.log('%c Warn: %c ' + message,"background:#000000;color:#FB8C00;","color:#000000;");
};