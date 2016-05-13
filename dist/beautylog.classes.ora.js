"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./beautylog.plugins");
var log = require("./beautylog.log");
var Ora = (function () {
    function Ora(textArg, colorArg) {
        this._oraObject = plugins.ora({
            spinner: "dots",
            text: textArg,
            color: colorArg
        });
        this._oraObject.start();
    }
    Ora.prototype.text = function (textArg) {
        this._oraObject.text = textArg;
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
    return Ora;
}());
exports.Ora = Ora;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLm9yYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDL0MsSUFBWSxHQUFHLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUV2QztJQUdJLGFBQVksT0FBYyxFQUFDLFFBQWU7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzFCLE9BQU8sRUFBQyxNQUFNO1lBQ2QsSUFBSSxFQUFDLE9BQU87WUFDWixLQUFLLEVBQUMsUUFBUTtTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxrQkFBSSxHQUFKLFVBQUssT0FBTztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDOztJQUNELGlCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELG1CQUFLLEdBQUwsVUFBTSxPQUFPO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQixDQUFDOztJQUNELHNCQUFRLEdBQVIsVUFBUyxPQUFPO1FBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDOztJQUNMLFVBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLFdBQUcsTUEwQmYsQ0FBQSIsImZpbGUiOiJiZWF1dHlsb2cuY2xhc3Nlcy5vcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vYmVhdXR5bG9nLnBsdWdpbnNcIjtcclxuaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2JlYXV0eWxvZy5sb2dcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmEge1xyXG4gICAgcHJpdmF0ZSBfb3JhT2JqZWN0O1xyXG4gICAgc3RhdGU6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IodGV4dEFyZzpzdHJpbmcsY29sb3JBcmc6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3QgPSBwbHVnaW5zLm9yYSh7XHJcbiAgICAgICAgICAgIHNwaW5uZXI6XCJkb3RzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6dGV4dEFyZyxcclxuICAgICAgICAgICAgY29sb3I6Y29sb3JBcmdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3Quc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHRleHQodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnRleHQgPSB0ZXh0QXJnO1xyXG4gICAgfTtcclxuICAgIGVuZCgpe1xyXG4gICAgICAgIHRoaXMuX29yYU9iamVjdC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBlbmRPayh0ZXh0QXJnKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIGxvZy5vayh0ZXh0QXJnKTtcclxuICAgIH07XHJcbiAgICBlbmRFcnJvcih0ZXh0QXJnKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIGxvZy5lcnJvcih0ZXh0QXJnKTtcclxuICAgIH07XHJcbn0iXX0=
