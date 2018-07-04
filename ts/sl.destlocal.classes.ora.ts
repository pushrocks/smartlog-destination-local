import * as plugins from './sl.destlocal.plugins';
import { Beautylog } from './sl.destlocal.classes.beautylog';

export class Ora {
  beautylog: Beautylog;
  state: string;
  private _oraObject;
  constructor(beautylogInstanceArg: Beautylog = new Beautylog()) {
    this._oraObject = plugins.ora({
      spinner: 'dots',
      text: '',
      color: 'blue'
    });
  }
  text(textArg) {
    this._oraObject.text = textArg;
  }

  start(textArg?: string, colorArg?: string) {
    if (textArg) {
      this.text(textArg);
    }
    if (colorArg) {
      this._oraObject.color = colorArg;
    }
    this._oraObject.start();
  }
  end() {
    this._oraObject.stop();
    this._oraObject.clear();
  }
  endOk(textArg) {
    this.end();
    logNode('ok', textArg);
  }
  endError(textArg) {
    this.end();
    logNode('error', textArg);
  }
  pause() {
    this._oraObject.stop();
  }
  stop() {
    // alias for end
    this.end();
  }
}
