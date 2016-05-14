"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./beautylog.plugins");
var log = require("./beautylog.log");
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
    Ora.prototype.start = function () {
        this._oraObject.start();
    };
    ;
    Ora.prototype.end = function () {
        this._oraObject.stop();
        this._oraObject.clear();
    };
    Ora.prototype.endOk = function (textArg) {
        this.end();
        log.ok(textArg);
    };
    ;
    Ora.prototype.endError = function (textArg) {
        this.end();
        log.error(textArg);
    };
    ;
    Ora.prototype.stop = function () {
        this.end();
    };
    // log methods that play nice with ora
    Ora.prototype.log = function (logText, logType) {
        this.stop();
        log.log(logText, logType);
        this.start();
    };
    return Ora;
}());
exports.Ora = Ora;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLm9yYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDL0MsSUFBWSxHQUFHLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUV2QztJQUdJLGFBQVksT0FBYyxFQUFDLFFBQWUsRUFBQyxRQUF3QjtRQUF4Qix3QkFBd0IsR0FBeEIsZ0JBQXdCO1FBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQixPQUFPLEVBQUMsTUFBTTtZQUNkLElBQUksRUFBQyxPQUFPO1lBQ1osS0FBSyxFQUFDLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBRUgsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxrQkFBSSxHQUFKLFVBQUssT0FBTztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDOztJQUVELG1CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7O0lBQ0QsaUJBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsbUJBQUssR0FBTCxVQUFNLE9BQU87UUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O0lBQ0Qsc0JBQVEsR0FBUixVQUFTLE9BQU87UUFDWixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O0lBQ0Qsa0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsaUJBQUcsR0FBSCxVQUFJLE9BQWMsRUFBQyxPQUFjO1FBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsVUFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUF6Q1ksV0FBRyxNQXlDZixDQUFBIiwiZmlsZSI6ImJlYXV0eWxvZy5jbGFzc2VzLm9yYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9iZWF1dHlsb2cucGx1Z2luc1wiO1xyXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vYmVhdXR5bG9nLmxvZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yYSB7XHJcbiAgICBwcml2YXRlIF9vcmFPYmplY3Q7XHJcbiAgICBzdGF0ZTpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0QXJnOnN0cmluZyxjb2xvckFyZzpzdHJpbmcsc3RhcnRBcmc6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3QgPSBwbHVnaW5zLm9yYSh7XHJcbiAgICAgICAgICAgIHNwaW5uZXI6XCJkb3RzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6dGV4dEFyZyxcclxuICAgICAgICAgICAgY29sb3I6Y29sb3JBcmdcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBzdGFydEFyZyA/IHRoaXMuX29yYU9iamVjdC5zdGFydCgpIDogdm9pZCgwKTtcclxuICAgIH1cclxuICAgIHRleHQodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnRleHQgPSB0ZXh0QXJnO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3Quc3RhcnQoKTtcclxuICAgIH07XHJcbiAgICBlbmQoKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3Quc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuX29yYU9iamVjdC5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZW5kT2sodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICBsb2cub2sodGV4dEFyZyk7XHJcbiAgICB9O1xyXG4gICAgZW5kRXJyb3IodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICBsb2cuZXJyb3IodGV4dEFyZyk7XHJcbiAgICB9O1xyXG4gICAgc3RvcCgpeyAvLyBhbGlhcyBmb3IgZW5kXHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gbG9nIG1ldGhvZHMgdGhhdCBwbGF5IG5pY2Ugd2l0aCBvcmFcclxuICAgIGxvZyhsb2dUZXh0OnN0cmluZyxsb2dUeXBlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgbG9nLmxvZyhsb2dUZXh0LGxvZ1R5cGUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxufSJdfQ==
