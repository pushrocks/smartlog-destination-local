"use strict";
require("typings-global");
const plugins = require("./beautylog.plugins");
let defaultOptions = {
    font: 'Star Wars',
    color: 'green',
    cb: function () { }
};
exports.figlet = function (textArg, optionsArg) {
    let done = plugins.q.defer();
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    let options = plugins.lodash.assign(mergeOptions, optionsArg);
    plugins.figlet(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function (err, data) {
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
exports.figletSync = function (textArg, optionsArg) {
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    let options = plugins.lodash.assign(mergeOptions, optionsArg);
    console.log(plugins.figlet.textSync(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })[options.color]);
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmZpZ2xldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5maWdsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0MsSUFBSSxjQUFjLEdBQUc7SUFDakIsSUFBSSxFQUFFLFdBQVc7SUFDakIsS0FBSyxFQUFFLE9BQU87SUFDZCxFQUFFLEVBQUUsY0FBWSxDQUFDO0NBQ3BCLENBQUE7QUFFVSxRQUFBLE1BQU0sR0FBRyxVQUFTLE9BQWMsRUFBQyxVQUFXO0lBQ25ELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDM0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzVELE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO1FBQ25CLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGNBQWMsRUFBRSxTQUFTO0tBQzVCLEVBQUUsVUFBUyxHQUFHLEVBQUUsSUFBSTtRQUNqQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxDQUFBO1FBQ1YsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQTtRQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQTtBQUVVLFFBQUEsVUFBVSxHQUFHLFVBQVMsT0FBZSxFQUFDLFVBQVc7SUFDeEQsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDM0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFDO1FBQ3hDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGNBQWMsRUFBRSxTQUFTO0tBQzVCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNsQixNQUFNLENBQUMsSUFBSSxDQUFBO0FBQ2YsQ0FBQyxDQUFBIn0=