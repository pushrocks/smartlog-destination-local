/// <reference path="./typings/main.d.ts" />

import plugins = require("./beautylog.plugins");
import BeautylogNode = require("./beautylog.node");
import BeautylogBrowser = require("./beautylog.browser");
var beautylog;
switch(plugins.smartenv.getEnv().runtimeEnv) {
    case "node":
        beautylog = BeautylogNode;
        break;
    case "browser":
        beautylog = BeautylogBrowser;
        break;
    default:
        console.log("something is strange about the platform in which you try to use beautylog");
        break;
}

export = beautylog;
