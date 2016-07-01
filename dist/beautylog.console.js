"use strict";
require("typings-global");
var beautylog_classes_ora_1 = require("./beautylog.classes.ora");
var nativeLog = console.log;
/**
 * routes the console to got through beautylog, so beautylog can take action before things are logged to console.
 */
var route = function (statusArg) {
    if (statusArg == true) {
        console.log = exports.beautyConsole.log;
    }
    else {
        console.log = nativeLog;
    }
};
exports.beautyConsole = {
    log2: nativeLog,
    log: function (logArg) {
        if (beautylog_classes_ora_1.oraActive) {
            beautylog_classes_ora_1.activeOra.pause();
            nativeLog.apply(nativeLog, arguments);
            beautylog_classes_ora_1.activeOra.start();
        }
        else {
            nativeLog.apply(nativeLog, arguments);
        }
    }
};
route(true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNvbnNvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9iZWF1dHlsb2cuY29uc29sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRXhCLHNDQUFrQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzVELElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFFNUI7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxVQUFTLFNBQWlCO0lBQ2xDLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLEdBQUcscUJBQWEsQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztBQUVMLENBQUMsQ0FBQztBQUVTLHFCQUFhLEdBQUc7SUFDdkIsSUFBSSxFQUFFLFNBQVM7SUFDZixHQUFHLEVBQUUsVUFBUyxNQUFVO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLGlDQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ1YsaUNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN0QyxpQ0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9