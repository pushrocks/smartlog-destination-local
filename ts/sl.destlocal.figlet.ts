import plugins = require('./sl.destlocal.plugins');

export interface IFigletOptions {
  font?: string;
  color?: plugins.consolecolor.TColorName;
  cb?;
}

const defaultOptions: IFigletOptions = {
  font: 'Star Wars',
  color: 'green',
  cb() {}
};

export let figlet = (textArg: string, optionsArg?) => {
  const done = plugins.smartpromise.defer();
  const mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
  const options = plugins.lodash.assign(mergeOptions, optionsArg);
  plugins.figlet(
    textArg,
    {
      font: options.font,
      horizontalLayout: 'default',
      verticalLayout: 'default'
    },
    function(err, data: string) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(colorFiglet(data, options.color));
      options.cb();
      done.resolve();
    }
  );
  return done.promise;
};

export let figletSync = (textArg: string, optionsArg?: IFigletOptions) => {
  const mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
  const options = plugins.lodash.assign(mergeOptions, optionsArg);
  const figletString: string = plugins.figlet.textSync(textArg, {
    font: options.font,
    horizontalLayout: 'default',
    verticalLayout: 'default'
  });
  console.log(colorFiglet(figletString, options.color));
  return true;
};

const colorFiglet = (figletStringArg, colorArg: plugins.consolecolor.TColorName) => {
  const figletArray = figletStringArg.split('\n');
  let figletStringCombined = '';
  for (let figletRow of figletArray) {
    figletRow = plugins.consolecolor.coloredString(figletRow, colorArg);
    figletStringCombined = figletStringCombined + figletRow + '\n';
  }
  return figletStringCombined;
};
