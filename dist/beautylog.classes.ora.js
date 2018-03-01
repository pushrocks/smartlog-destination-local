"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // alias for end
        this.end();
    }
}
exports.Ora = Ora;
exports.ora = new Ora('init...', 'blue', false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMub3JhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmNsYXNzZXMub3JhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQXdCO0FBQ3hCLCtDQUErQztBQUMvQyxtRUFBa0Q7QUFFdkMsUUFBQSxTQUFTLEdBQVksS0FBSyxDQUFDLENBQUMsb0RBQW9EO0FBRzNGO0lBR0UsWUFBWSxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxXQUFvQixLQUFLO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUM1QixPQUFPLEVBQUUsTUFBTTtZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU87UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFnQixFQUFFLFFBQWlCO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ25DLENBQUM7UUFDRCxpQkFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxHQUFHO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLGlCQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGlCQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxLQUFLLENBQUMsT0FBTztRQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLCtCQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxRQUFRLENBQUMsT0FBTztRQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLCtCQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSTtRQUNGLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUFqREQsa0JBaURDO0FBRVUsUUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyJ9