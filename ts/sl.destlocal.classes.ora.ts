import * as plugins from './sl.destlocal.plugins';
import { DestinationLocal } from './sl.destlocal.classes.destinationlocal';

export class Ora {
  /**
   * the destinationLocalInstance that ora talks to
   */
  destinationLocalInstance: DestinationLocal;

  /**
   * the state of the current ora
   */
  state: 'running' | 'stopped' | 'paused' = 'stopped';

  /**
   * the actual ora object
   */
  private _oraObject;

  constructor(destinationLocalInstanceArg: DestinationLocal = new DestinationLocal()) {
    this.destinationLocalInstance = destinationLocalInstanceArg;
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
    this.state = 'running';
    this._oraObject.start();
  }

  end() {
    this._oraObject.stop();
    this._oraObject.clear();
    this.state = 'stopped';
  }
  
  pause() {
    this._oraObject.stop();
    this.state = 'paused';
  }

  /**
   * stop is an alias for end
   */
  stop() {
    this.end();
  }
}
