"use strict";
require("typings-global");
var plugins = require("./beautylog.plugins");
var beautylog_log_helpers_1 = require("./beautylog.log.helpers");
exports.oraActive = false; // when an Ora is active (e.g. start()) this is true;
var Ora = (function () {
    function Ora(textArg, colorArg, startArg) {
        if (startArg === void 0) { startArg = false; }
        this._oraObject = plugins.ora({
            spinner: "dots",
            text: textArg,
            color: colorArg
        });
        startArg ? this._oraObject.start() : void (0);
    }
    Ora.prototype.text = function (textArg) {
        this._oraObject.text = textArg;
    };
    ;
    Ora.prototype.start = function (textArg, colorArg) {
        if (textArg)
            this._oraObject.text = textArg;
        if (colorArg)
            this._oraObject.color = colorArg;
        exports.activeOra = this;
        exports.oraActive = true;
        this._oraObject.start();
    };
    ;
    Ora.prototype.end = function () {
        this._oraObject.stop();
        this._oraObject.clear();
        exports.activeOra = undefined;
        exports.oraActive = false;
    };
    Ora.prototype.endOk = function (textArg) {
        this.end();
        beautylog_log_helpers_1.logNode(textArg, "ok");
    };
    ;
    Ora.prototype.endError = function (textArg) {
        this.end();
        beautylog_log_helpers_1.logNode(textArg, "error");
    };
    ;
    Ora.prototype.pause = function () {
        this._oraObject.stop();
    };
    Ora.prototype.stop = function () {
        this.end();
    };
    // log methods that play nice with ora
    Ora.prototype.log = function (logText, logType) {
        this.stop();
        beautylog_log_helpers_1.logNode(logText, logType);
        this.start();
    };
    return Ora;
}());
exports.Ora = Ora;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMub3JhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmNsYXNzZXMub3JhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0scUJBQXFCLENBQUMsQ0FBQTtBQUMvQyxzQ0FBc0IseUJBQXlCLENBQUMsQ0FBQTtBQUVyQyxpQkFBUyxHQUFXLEtBQUssQ0FBQyxDQUFDLHFEQUFxRDtBQUczRjtJQUdJLGFBQVksT0FBYyxFQUFDLFFBQWUsRUFBQyxRQUF3QjtRQUF4Qix3QkFBd0IsR0FBeEIsZ0JBQXdCO1FBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQixPQUFPLEVBQUMsTUFBTTtZQUNkLElBQUksRUFBQyxPQUFPO1lBQ1osS0FBSyxFQUFDLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBRUgsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxrQkFBSSxHQUFKLFVBQUssT0FBTztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDOztJQUVELG1CQUFLLEdBQUwsVUFBTSxPQUFlLEVBQUMsUUFBZ0I7UUFDbEMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQzNDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM5QyxpQkFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7O0lBQ0QsaUJBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixpQkFBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixpQkFBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsbUJBQUssR0FBTCxVQUFNLE9BQU87UUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCwrQkFBTyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOztJQUNELHNCQUFRLEdBQVIsVUFBUyxPQUFPO1FBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsK0JBQU8sQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7SUFDRCxtQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsa0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsaUJBQUcsR0FBSCxVQUFJLE9BQWMsRUFBQyxPQUFjO1FBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksV0FBRyxNQWtEZixDQUFBIn0=