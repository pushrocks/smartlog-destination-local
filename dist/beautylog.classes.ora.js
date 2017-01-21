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
        if (startArg) {
            this.start();
        }
    }
    text(textArg) {
        this._oraObject.text = textArg;
    }
    start(textArg, colorArg) {
        if (textArg) {
            this.text(textArg);
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
exports.ora = new Ora('init...', 'blue', false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMub3JhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmNsYXNzZXMub3JhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBdUI7QUFDdkIsK0NBQThDO0FBQzlDLG1FQUErQztBQUVwQyxRQUFBLFNBQVMsR0FBWSxLQUFLLENBQUEsQ0FBQyxvREFBb0Q7QUFHMUY7SUFHSSxZQUFZLE9BQWUsRUFBQyxRQUFnQixFQUFDLFdBQW9CLEtBQUs7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzFCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU87UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFnQixFQUFDLFFBQWlCO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQUMsQ0FBQztRQUNsRCxpQkFBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixpQkFBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFDRCxHQUFHO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3ZCLGlCQUFTLEdBQUcsU0FBUyxDQUFBO1FBQ3JCLGlCQUFTLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFDRCxLQUFLLENBQUMsT0FBTztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLCtCQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDRCxRQUFRLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQ0QsSUFBSTtRQUNBLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNkLENBQUM7Q0FDSjtBQTVDRCxrQkE0Q0M7QUFFVSxRQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBIn0=