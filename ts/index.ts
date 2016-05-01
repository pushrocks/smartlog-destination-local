/// <reference path="./typings/main.d.ts" />

import * as plugins from "./beautylog.plugins";
import * as BeautylogNode from "./beautylog.node";
import * as BeautylogBrowser from "./beautylog.browser";

let beautylog;
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
