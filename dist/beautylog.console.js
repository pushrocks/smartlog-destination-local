"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog_classes_ora_1 = require("./beautylog.classes.ora");
let nativeLog = console.log;
let nativeError = console.error;
/**
 * routes the console to got through beautylog, so beautylog can take action before things are logged to console.
 */
let route = function (statusArg) {
    if (statusArg === true) {
        console.log = exports.beautyConsole.log;
        console.error = exports.beautyConsole.error;
    }
    else {
        console.log = nativeLog;
    }
};
exports.beautyConsole = {
    log: function (logArg) {
        if (beautylog_classes_ora_1.oraActive) {
            beautylog_classes_ora_1.activeOra.pause();
            nativeLog.apply(nativeLog, arguments);
            beautylog_classes_ora_1.activeOra.start();
        }
        else {
            nativeLog.apply(nativeLog, arguments);
        }
    },
    error: function () {
        if (beautylog_classes_ora_1.oraActive) {
            beautylog_classes_ora_1.activeOra.pause();
            nativeLog.apply(nativeError, arguments);
            beautylog_classes_ora_1.activeOra.start();
        }
        else {
            nativeLog.apply(nativeError, arguments);
        }
    }
};
route(true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNvbnNvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9iZWF1dHlsb2cuY29uc29sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF3QjtBQUV4QixtRUFBK0Q7QUFDL0QsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUM1QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBRWhDOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsVUFBUyxTQUFrQjtJQUNyQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxHQUFHLHFCQUFhLENBQUMsR0FBRyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcscUJBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVTLFFBQUEsYUFBYSxHQUFHO0lBQ3pCLEdBQUcsRUFBRSxVQUFTLE1BQVc7UUFDdkIsRUFBRSxDQUFDLENBQUMsaUNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxpQ0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLGlDQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLENBQUMsQ0FBQyxpQ0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLGlDQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEMsaUNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUM7QUFFRixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMifQ==