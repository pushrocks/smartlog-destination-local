import * as plugins from './sl.destlocal.plugins';
import { ILogDestination, ILogPackage, TLogLevel } from '@pushrocks/smartlog-interfaces';

// other beautylog classes
import { Ora } from './sl.destlocal.classes.ora';
import { TColorName } from '@pushrocks/consolecolor';

export class DestinationLocal implements ILogDestination {
  private oraInstance: Ora;

  /**
   * handles a log according to the smartlog standard
   * @param logPackage
   */
  public handleLog(logPackage: ILogPackage) {
    this.logToConsole(logPackage);
  }

  get ora(): Ora {
    if (!this.oraInstance) {
      this.oraInstance = new Ora(this);
    }
    return this.oraInstance;
  }

  /**
   * creates a new empty line
   * @param linesArg
   * @returns void
   */
  public newLine(linesArg: number = 1) {
    for (let i = 0; i < linesArg; i++) {
      console.log('\n');
    }
  }

  /**
   * logs a reduced log that only logs changes of consequential log messages
   */
  public logReduced(logTextArg: string, repeatEveryTimesArg: number = 0) {
    if (
      logTextArg === this.previousMessage &&
      (repeatEveryTimesArg === 0 || this.sameMessageCounter !== repeatEveryTimesArg)
    ) {
      this.sameMessageCounter++;
    } else {
      this.sameMessageCounter = 0;
      this.previousMessage = logTextArg;
      this.logToConsole({
        type: 'log',
        level: 'info',
        context: {
          company: 'undefined',
          companyunit: 'undefined',
          containerName: 'undefined',
          environment: 'test',
          runtime: 'node',
          zone: 'undefined'
        },
        message: logTextArg
      });
    }
  }
  private previousMessage: string = '';
  private sameMessageCounter: number = 0;

  // default logging
  logToConsole(logPackageArg: ILogPackage) {
    let logString: string;
    try {
      logString =
        this.localBl[logPackageArg.level].prefix +
        plugins.consolecolor.coloredString(
          logPackageArg.message,
          this.localBl[logPackageArg.level].textColor
        );

      if (this.ora.state === 'running') {
        this.ora.pause();
      }
      console.log(logString);
      if (this.ora.state === 'paused') {
        this.ora.start();
      }
      return true;
    } catch (error) {
      console.log(
        this.localBl.errorPrefix + 'You seem to have tried logging something strange' + error
      );
      return false;
    }
  }

  private localBl: {
    [key: string]: {
      prefix: string;
      textColor: TColorName;
    };
  } = {
    silly: {
      prefix: plugins.consolecolor.coloredString(' silly ', 'white', 'blue') + ' ',
      textColor: 'blue'
    },
    error: {
      prefix:
        plugins.consolecolor.coloredString(' ', 'red', 'red') +
        plugins.consolecolor.coloredString(' ERROR!  ', 'red', 'black') +
        ' ',
      textColor: 'red'
    },
    info: {
      prefix:
        plugins.consolecolor.coloredString(' ', 'blue', 'blue') +
        plugins.consolecolor.coloredString(' info: ', 'blue', 'black') +
        ' ',
      textColor: 'white'
    },
    note: {
      prefix:
        plugins.consolecolor.coloredString(' ', 'pink', 'pink') +
        plugins.consolecolor.coloredString(' note -> ', 'pink', 'black') +
        ' ',
      textColor: 'pink'
    },
    ok: {
      prefix:
        plugins.consolecolor.coloredString(' ', 'green', 'green') +
        plugins.consolecolor.coloredString(' ok ', 'green', 'black') +
        ' ',
      textColor: 'green'
    },
    success: {
      prefix:
        plugins.consolecolor.coloredString(' ', 'green', 'green') +
        plugins.consolecolor.coloredString(' SUCCESS! ', 'green', 'black') +
        ' ',
      textColor: 'green'
    },
    warn: {
      prefix:
        plugins.consolecolor.coloredString(' ', 'orange', 'orange') +
        plugins.consolecolor.coloredString(' WARN -> ', 'orange', 'black') +
        ' ',
      textColor: 'orange'
    }
  };
}
