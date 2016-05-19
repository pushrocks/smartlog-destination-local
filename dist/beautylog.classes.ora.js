"use strict";
/// <reference path="./typings/main.d.ts" />
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLm9yYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDL0Msc0NBQXNCLHlCQUF5QixDQUFDLENBQUE7QUFFckMsaUJBQVMsR0FBVyxLQUFLLENBQUMsQ0FBQyxxREFBcUQ7QUFHM0Y7SUFHSSxhQUFZLE9BQWMsRUFBQyxRQUFlLEVBQUMsUUFBd0I7UUFBeEIsd0JBQXdCLEdBQXhCLGdCQUF3QjtRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUIsT0FBTyxFQUFDLE1BQU07WUFDZCxJQUFJLEVBQUMsT0FBTztZQUNaLEtBQUssRUFBQyxRQUFRO1NBQ2pCLENBQUMsQ0FBQztRQUVILFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsa0JBQUksR0FBSixVQUFLLE9BQU87UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7SUFFRCxtQkFBSyxHQUFMLFVBQU0sT0FBZSxFQUFDLFFBQWdCO1FBQ2xDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7WUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDOUMsaUJBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOztJQUNELGlCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsaUJBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsaUJBQVMsR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELG1CQUFLLEdBQUwsVUFBTSxPQUFPO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsK0JBQU8sQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7SUFDRCxzQkFBUSxHQUFSLFVBQVMsT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O0lBQ0QsbUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLGlCQUFHLEdBQUgsVUFBSSxPQUFjLEVBQUMsT0FBYztRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWiwrQkFBTyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLFdBQUcsTUFrRGYsQ0FBQSIsImZpbGUiOiJiZWF1dHlsb2cuY2xhc3Nlcy5vcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vYmVhdXR5bG9nLnBsdWdpbnNcIjtcclxuaW1wb3J0IHtsb2dOb2RlfSBmcm9tIFwiLi9iZWF1dHlsb2cubG9nLmhlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBsZXQgb3JhQWN0aXZlOmJvb2xlYW4gPSBmYWxzZTsgLy8gd2hlbiBhbiBPcmEgaXMgYWN0aXZlIChlLmcuIHN0YXJ0KCkpIHRoaXMgaXMgdHJ1ZTtcclxuZXhwb3J0IGxldCBhY3RpdmVPcmE6T3JhOyAvL3BvaW50cyB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSBPcmEgb2JqZWN0XHJcblxyXG5leHBvcnQgY2xhc3MgT3JhIHtcclxuICAgIHByaXZhdGUgX29yYU9iamVjdDtcclxuICAgIHN0YXRlOnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHRleHRBcmc6c3RyaW5nLGNvbG9yQXJnOnN0cmluZyxzdGFydEFyZzpib29sZWFuID0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuX29yYU9iamVjdCA9IHBsdWdpbnMub3JhKHtcclxuICAgICAgICAgICAgc3Bpbm5lcjpcImRvdHNcIixcclxuICAgICAgICAgICAgdGV4dDp0ZXh0QXJnLFxyXG4gICAgICAgICAgICBjb2xvcjpjb2xvckFyZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN0YXJ0QXJnID8gdGhpcy5fb3JhT2JqZWN0LnN0YXJ0KCkgOiB2b2lkKDApO1xyXG4gICAgfVxyXG4gICAgdGV4dCh0ZXh0QXJnKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3QudGV4dCA9IHRleHRBcmc7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzdGFydCh0ZXh0QXJnPzpzdHJpbmcsY29sb3JBcmc/OnN0cmluZyl7XHJcbiAgICAgICAgaWYodGV4dEFyZykgdGhpcy5fb3JhT2JqZWN0LnRleHQgPSB0ZXh0QXJnO1xyXG4gICAgICAgIGlmKGNvbG9yQXJnKSB0aGlzLl9vcmFPYmplY3QuY29sb3IgPSBjb2xvckFyZztcclxuICAgICAgICBhY3RpdmVPcmEgPSB0aGlzO1xyXG4gICAgICAgIG9yYUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgZW5kKCl7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnN0b3AoKTtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3QuY2xlYXIoKTtcclxuICAgICAgICBhY3RpdmVPcmEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgb3JhQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbmRPayh0ZXh0QXJnKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIGxvZ05vZGUodGV4dEFyZyxcIm9rXCIpO1xyXG4gICAgfTtcclxuICAgIGVuZEVycm9yKHRleHRBcmcpe1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgbG9nTm9kZSh0ZXh0QXJnLFwiZXJyb3JcIik7XHJcbiAgICB9O1xyXG4gICAgcGF1c2UoKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3Quc3RvcCgpO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpeyAvLyBhbGlhcyBmb3IgZW5kXHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gbG9nIG1ldGhvZHMgdGhhdCBwbGF5IG5pY2Ugd2l0aCBvcmFcclxuICAgIGxvZyhsb2dUZXh0OnN0cmluZyxsb2dUeXBlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgbG9nTm9kZShsb2dUZXh0LGxvZ1R5cGUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxufSJdfQ==
