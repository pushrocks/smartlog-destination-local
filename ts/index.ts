/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./beautylog.plugins.ts" />
/// <reference path="./beautylog.classes.ts" />
/// <reference path="./beautylog.node.ts" />
/// <reference path="./beautylog.node.table.ts" />
/// <reference path="./beautylog.browser.ts" />

var plugins = BeautylogPlugins.init();
var beautylog = (function() {
    switch (plugins.smartenv.getEnv().runtimeEnv) {
        case "node":
            var beautylogOs = BeautylogNode.init();
            return beautylogOs;
            break;
        case "browser":
            var beautylogBrowser = BeautylogBrowser.init();
            return beautylogBrowser;
            break;
        default:
            console.log("something is strange about the platform in which you try to use beautylog");
            break;
    }
})();
module.exports = beautylog;
