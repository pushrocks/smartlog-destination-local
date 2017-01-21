"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNvbnNvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9iZWF1dHlsb2cuY29uc29sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBRXZCLG1FQUE4RDtBQUM5RCxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFBO0FBQzNCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7QUFFL0I7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxVQUFTLFNBQWtCO0lBQ25DLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLEdBQUcscUJBQWEsQ0FBQyxHQUFHLENBQUE7UUFDL0IsT0FBTyxDQUFDLEtBQUssR0FBRyxxQkFBYSxDQUFDLEtBQUssQ0FBQTtJQUN2QyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQTtJQUMzQixDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRVUsUUFBQSxhQUFhLEdBQUc7SUFDdkIsR0FBRyxFQUFFLFVBQVMsTUFBVztRQUNyQixFQUFFLENBQUMsQ0FBQyxpQ0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLGlDQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDakIsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDckMsaUNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssRUFBRTtRQUNILEVBQUUsQ0FBQyxDQUFDLGlDQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osaUNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNqQixTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUN2QyxpQ0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQzNDLENBQUM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQSJ9