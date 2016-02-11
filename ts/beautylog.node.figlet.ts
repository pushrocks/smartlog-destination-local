/// <reference path="./index.ts" />
module BeautylogNodeFiglet {
    var figlet = function(textArg:string,optionsArg?){
        var defaultOptions = {
            font:"Star Wars",
            color: "green",
            cb: function(){}
        };
        var options = plugins.lodash.assign(defaultOptions,optionsArg);
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
        });
    }
    export var init = function(){
        var done = plugins.q.defer();
        done.resolve();
        return figlet;
    };
}
