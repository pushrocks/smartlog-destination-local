import "typings-global";
import plugins = require("./beautylog.plugins");
var defaultOptions = {
    font:"Star Wars",
    color: "green",
    cb: function(){}
};

export var figlet = function(textArg:string,optionsArg?){
    var done = plugins.q.defer();
    var mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    var options = plugins.lodash.assign(mergeOptions,optionsArg);
    plugins.figlet(textArg,{
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data[options.color]);
        options.cb();
        done.resolve();
    });
    return done.promise;
};

export var figletSync = function(textArg:string,optionsArg?){
    var mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    var options = plugins.lodash.assign(mergeOptions,optionsArg);
    console.log(plugins.figlet.textSync(textArg,{
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })[options.color]);
    return true;
};
