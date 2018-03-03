import * as plugins from './beautylog.plugins';
import { ILogDestination, ILogPackage } from 'smartlog-interfaces';

// other beautylog classes
import { Ora } from './beautylog.classes.ora';

export interface IBeautyLogObject {
  logType: string;
  logString: string;
}

export class Beautylog implements ILogDestination {
  private oraInstance: Ora;
  handleLog(logPackage: ILogPackage) {
    this.logToConsole(this.parseLog(logPackage.message));
  }

  get ora(): Ora {
    if (!this.oraInstance) {
      this.oraInstance = new Ora(this);
    }
    return this.oraInstance;
  }

  /**
   * parse logs for display
   */
  private parseLog = (stringToParseArg: string): IBeautyLogObject => {
    const parseLogRegex = /^(success|ok|info|warn|error):\s(.*)/;
    const regexResult = parseLogRegex.exec(stringToParseArg);
    if (regexResult && regexResult.length === 3) {
      return {
        logType: regexResult[1],
        logString: regexResult[2]
      };
    } else {
      return {
        logType: 'log',
        logString: stringToParseArg
      };
    }
  };

  /**
   * creates a new empty line
   * @param linesArg
   * @returns void
   */
  newLine(linesArg: number = 1) {
    for (let i = 0; i < linesArg; i++) {
      console.log('\n');
    }
  }

  /**
   * logs a reduced log that only logs changes of consequential log messages
   */
  logReduced(logTextArg: string, repeatEveryTimesArg: number = 0) {
    if (
      logTextArg === this.previousMessage &&
      (repeatEveryTimesArg === 0 || this.sameMessageCounter !== repeatEveryTimesArg)
    ) {
      this.sameMessageCounter++;
    } else {
      this.sameMessageCounter = 0;
      this.previousMessage = logTextArg;
      this.logToConsole({
        logType: 'log',
        logString: logTextArg
      });
    }
  }
  private previousMessage: string = '';
  private sameMessageCounter: number = 0;

  // default logging
  logToConsole(beautlogObject: IBeautyLogObject) {
    let { logType, logString } = beautlogObject;
    try {
      switch (logType) {
        case 'dir':
          logString = this.localBl.dirPrefix + plugins.beautycolor.coloredString(logString, 'blue');
          break;
        case 'error':
          logString =
            this.localBl.errorPrefix + plugins.beautycolor.coloredString(logString, 'red');
          break;
        case 'info':
          logString =
            this.localBl.infoPrefix + plugins.beautycolor.coloredString(logString, 'blue');
          break;
        case 'normal':
          logString = this.localBl.logPrefix + plugins.beautycolor.coloredString(logString, 'cyan');
          break;
        case 'note':
          logString =
            this.localBl.notePrefix + plugins.beautycolor.coloredString(logString, 'pink');
          break;
        case 'ok':
          logString = this.localBl.okPrefix + plugins.beautycolor.coloredString(logString, 'green');
          break;
        case 'success':
          logString =
            this.localBl.successPrefix + plugins.beautycolor.coloredString(logString, 'green');
          break;
        case 'warn':
          logString =
            this.localBl.warnPrefix + plugins.beautycolor.coloredString(logString, 'orange');
          break;
        case 'log':
          logString = this.localBl.logPrefix + plugins.beautycolor.coloredString(logString, 'cyan');
          break;
        default:
          plugins.beautycolor.coloredString(logString, 'blue');
          console.log('unknown logType for "' + logString + '"');
          break;
      }
      console.log(logString);
      return true;
    } catch (error) {
      console.log(
        this.localBl.errorPrefix + 'You seem to have tried logging something strange' + error
      );
      return false;
    }
  }

  private localBl = {
    dirPrefix: plugins.beautycolor.coloredString(' DIR ', 'white', 'blue') + ' ',
    errorPrefix:
      plugins.beautycolor.coloredString(' ', 'red', 'red') +
      plugins.beautycolor.coloredString(' ERROR!  ', 'red', 'black') +
      ' ',
    infoPrefix:
      plugins.beautycolor.coloredString(' ', 'blue', 'blue') +
      plugins.beautycolor.coloredString(' INFO: ', 'blue', 'black') +
      ' ',
    logPrefix:
      plugins.beautycolor.coloredString(' ', 'white', 'cyan') +
      plugins.beautycolor.coloredString(' LOG: ', 'cyan', 'black') +
      ' ',
    notePrefix:
      plugins.beautycolor.coloredString(' ', 'pink', 'pink') +
      plugins.beautycolor.coloredString(' NOTE -> ', 'pink', 'black') +
      ' ',
    okPrefix:
      plugins.beautycolor.coloredString(' ', 'green', 'green') +
      plugins.beautycolor.coloredString(' OK! ', 'green', 'black') +
      ' ',
    successPrefix:
      plugins.beautycolor.coloredString(' ', 'green', 'green') +
      plugins.beautycolor.coloredString(' SUCCESS! ', 'green', 'black') +
      ' ',
    warnPrefix:
      plugins.beautycolor.coloredString(' ', 'orange', 'orange') +
      plugins.beautycolor.coloredString(' WARN: -> ', 'orange', 'black') +
      ' '
  };
}
