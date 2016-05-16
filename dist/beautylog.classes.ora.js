"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./beautylog.plugins");
var beautylog_log_helpers_1 = require("./beautylog.log.helpers");
exports.isOraActive = false; // when an Ora is active (e.g. start()) this is true;
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
        exports.isOraActive = true;
        this._oraObject.start();
    };
    ;
    Ora.prototype.end = function () {
        this._oraObject.stop();
        this._oraObject.clear();
        exports.activeOra = undefined;
        exports.isOraActive = false;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLm9yYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDL0Msc0NBQXNCLHlCQUF5QixDQUFDLENBQUE7QUFFckMsbUJBQVcsR0FBVyxLQUFLLENBQUMsQ0FBQyxxREFBcUQ7QUFHN0Y7SUFHSSxhQUFZLE9BQWMsRUFBQyxRQUFlLEVBQUMsUUFBd0I7UUFBeEIsd0JBQXdCLEdBQXhCLGdCQUF3QjtRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUIsT0FBTyxFQUFDLE1BQU07WUFDZCxJQUFJLEVBQUMsT0FBTztZQUNaLEtBQUssRUFBQyxRQUFRO1NBQ2pCLENBQUMsQ0FBQztRQUVILFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsa0JBQUksR0FBSixVQUFLLE9BQU87UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7SUFFRCxtQkFBSyxHQUFMLFVBQU0sT0FBZSxFQUFDLFFBQWdCO1FBQ2xDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7WUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDOUMsaUJBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOztJQUNELGlCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsaUJBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsbUJBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELG1CQUFLLEdBQUwsVUFBTSxPQUFPO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsK0JBQU8sQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7SUFDRCxzQkFBUSxHQUFSLFVBQVMsT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O0lBQ0Qsa0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsaUJBQUcsR0FBSCxVQUFJLE9BQWMsRUFBQyxPQUFjO1FBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsVUFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1ksV0FBRyxNQStDZixDQUFBIiwiZmlsZSI6ImJlYXV0eWxvZy5jbGFzc2VzLm9yYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9iZWF1dHlsb2cucGx1Z2luc1wiO1xyXG5pbXBvcnQge2xvZ05vZGV9IGZyb20gXCIuL2JlYXV0eWxvZy5sb2cuaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGxldCBpc09yYUFjdGl2ZTpib29sZWFuID0gZmFsc2U7IC8vIHdoZW4gYW4gT3JhIGlzIGFjdGl2ZSAoZS5nLiBzdGFydCgpKSB0aGlzIGlzIHRydWU7XHJcbmV4cG9ydCBsZXQgYWN0aXZlT3JhOk9yYTsgLy9wb2ludHMgdG8gdGhlIGN1cnJlbnRseSBhY3RpdmUgT3JhIG9iamVjdFxyXG5cclxuZXhwb3J0IGNsYXNzIE9yYSB7XHJcbiAgICBwcml2YXRlIF9vcmFPYmplY3Q7XHJcbiAgICBzdGF0ZTpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0QXJnOnN0cmluZyxjb2xvckFyZzpzdHJpbmcsc3RhcnRBcmc6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3QgPSBwbHVnaW5zLm9yYSh7XHJcbiAgICAgICAgICAgIHNwaW5uZXI6XCJkb3RzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6dGV4dEFyZyxcclxuICAgICAgICAgICAgY29sb3I6Y29sb3JBcmdcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBzdGFydEFyZyA/IHRoaXMuX29yYU9iamVjdC5zdGFydCgpIDogdm9pZCgwKTtcclxuICAgIH1cclxuICAgIHRleHQodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnRleHQgPSB0ZXh0QXJnO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc3RhcnQodGV4dEFyZz86c3RyaW5nLGNvbG9yQXJnPzpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRleHRBcmcpIHRoaXMuX29yYU9iamVjdC50ZXh0ID0gdGV4dEFyZztcclxuICAgICAgICBpZihjb2xvckFyZykgdGhpcy5fb3JhT2JqZWN0LmNvbG9yID0gY29sb3JBcmc7XHJcbiAgICAgICAgYWN0aXZlT3JhID0gdGhpcztcclxuICAgICAgICBpc09yYUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgZW5kKCl7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnN0b3AoKTtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3QuY2xlYXIoKTtcclxuICAgICAgICBhY3RpdmVPcmEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaXNPcmFBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVuZE9rKHRleHRBcmcpe1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgbG9nTm9kZSh0ZXh0QXJnLFwib2tcIik7XHJcbiAgICB9O1xyXG4gICAgZW5kRXJyb3IodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICBsb2dOb2RlKHRleHRBcmcsXCJlcnJvclwiKTtcclxuICAgIH07XHJcbiAgICBzdG9wKCl7IC8vIGFsaWFzIGZvciBlbmRcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBsb2cgbWV0aG9kcyB0aGF0IHBsYXkgbmljZSB3aXRoIG9yYVxyXG4gICAgbG9nKGxvZ1RleHQ6c3RyaW5nLGxvZ1R5cGU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICBsb2dOb2RlKGxvZ1RleHQsbG9nVHlwZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19
