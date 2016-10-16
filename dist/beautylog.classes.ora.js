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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMub3JhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmNsYXNzZXMub3JhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBdUI7QUFDdkIsK0NBQThDO0FBQzlDLG1FQUErQztBQUVwQyxRQUFBLFNBQVMsR0FBWSxLQUFLLENBQUEsQ0FBQyxvREFBb0Q7QUFHMUY7SUFHSSxZQUFZLE9BQWUsRUFBQyxRQUFnQixFQUFDLFFBQVEsR0FBWSxLQUFLO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQixPQUFPLEVBQUUsTUFBTTtZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFBO1FBRUYsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFDRCxJQUFJLENBQUMsT0FBTztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWdCLEVBQUMsUUFBaUI7UUFDcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtRQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTtRQUFDLENBQUM7UUFDbEQsaUJBQVMsR0FBRyxJQUFJLENBQUE7UUFDaEIsaUJBQVMsR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsR0FBRztRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN2QixpQkFBUyxHQUFHLFNBQVMsQ0FBQTtRQUNyQixpQkFBUyxHQUFHLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBQ0QsS0FBSyxDQUFDLE9BQU87UUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDViwrQkFBTyxDQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsUUFBUSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDViwrQkFBTyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUNELElBQUk7UUFDQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDZCxDQUFDO0NBQ0o7QUEzQ0Qsa0JBMkNDIn0=