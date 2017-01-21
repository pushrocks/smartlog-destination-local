"use strict";
require("typings-global");
const plugins = require("./beautylog.plugins");
const beautylog_log_helpers_1 = require("./beautylog.log.helpers");
exports.oraActive = false; // when an Ora is active (e.g. start()) this is true
class Ora {
    constructor(textArg, colorArg, startArg = false) {
        this._oraObject = plugins.ora({
            spinner: 'dots',
            text: textArg,
            color: colorArg
        });
        startArg ? this._oraObject.start() : void (0);
    }
    text(textArg) {
        this._oraObject.text = textArg;
    }
    start(textArg, colorArg) {
        if (textArg) {
            this._oraObject.text = textArg;
        }
        if (colorArg) {
            this._oraObject.color = colorArg;
        }
        exports.activeOra = this;
        exports.oraActive = true;
        this._oraObject.start();
    }
    end() {
        this._oraObject.stop();
        this._oraObject.clear();
        exports.activeOra = undefined;
        exports.oraActive = false;
    }
    endOk(textArg) {
        this.end();
        beautylog_log_helpers_1.logNode('ok', textArg);
    }
    endError(textArg) {
        this.end();
        beautylog_log_helpers_1.logNode('error', textArg);
    }
    pause() {
        this._oraObject.stop();
    }
    stop() {
        this.end();
    }
}
exports.Ora = Ora;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMub3JhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmNsYXNzZXMub3JhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBdUI7QUFDdkIsK0NBQThDO0FBQzlDLG1FQUErQztBQUVwQyxRQUFBLFNBQVMsR0FBWSxLQUFLLENBQUEsQ0FBQyxvREFBb0Q7QUFHMUY7SUFHSSxZQUFZLE9BQWUsRUFBQyxRQUFnQixFQUFDLFdBQW9CLEtBQUs7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzFCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUE7UUFFRixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUNELElBQUksQ0FBQyxPQUFPO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZ0IsRUFBQyxRQUFpQjtRQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO1FBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQUMsQ0FBQztRQUNsRCxpQkFBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixpQkFBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFDRCxHQUFHO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3ZCLGlCQUFTLEdBQUcsU0FBUyxDQUFBO1FBQ3JCLGlCQUFTLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFDRCxLQUFLLENBQUMsT0FBTztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLCtCQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDRCxRQUFRLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQ0QsSUFBSTtRQUNBLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNkLENBQUM7Q0FDSjtBQTNDRCxrQkEyQ0MifQ==